import express from 'express';
import mongoose from "mongoose";
import config from "./configuration/config.js";
import postRoutes from "./routes/post.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import createRandomId24 from "./utils/idCreator.js";


const app = express();

app.use(express.json());


app.use('/forum', postRoutes)

app.use(errorHandler)

app.use((req, res) => {
    res.status(404).type('text/plain; charset=utf-8').send('404 Not Found')
});


// connecting DB MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodb.uri, config.mongodb.db);
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log('Failed connecting to MongoDB: ', e);
    }
}

// connecting PORT
async function startServer() {
    await connectDB();
    app.listen(config.port, () => console.log(`Server running on port ${config.port}. Press Ctrl+C to quit.`));
}

startServer(); //START OF SERVER !!!