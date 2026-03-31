import express from 'express';
import mongoose from "mongoose";
import config from "./configuration/config.js";
import postRoutes from "./routes/post.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import createRandomId24 from "./utils/idCreator.js";
import {setDbConnectionError} from "./state/db.state.js";
import {dbGuard} from "./middlewares/db-guard.middleware.js";


const app = express();

app.use(express.json());
app.use('/health', (req, res) =>{
    res.json({status: 'server online',
        database:mongoose.connection.readyState ===1?"connected":"disconnected"
    })
})
app.use(dbGuard)
app.use('/forum', postRoutes)

app.use(errorHandler)

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodb.uri, config.mongodb.db);
        console.log("Connected to MongoDB");
    } catch (e) {
        setDbConnectionError(e)
        console.log('Failed connecting to MongoDB: ', e);
    }
}

async function startServer() {
    await connectDB();
    app.listen(config.port, () => console.log(`Server running on port ${config.port}. Press Ctrl+C to quit.`));
}

startServer();