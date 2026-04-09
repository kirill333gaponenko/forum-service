// Imports
import express from 'express';
import mongoose from "mongoose";
import config from "./configuration/config.js";
import postRoutes from "./routes/post.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import userRoutes from "./routes/user.routes.js";

// App
const app = express();

// JSON parser
app.use(express.json());

// Routes: account
app.use('/account',userRoutes)
// Routes: forum
app.use('/forum', postRoutes)

// Error handler
app.use(errorHandler)
// 404 handler
app.use((req, res) => res.status(404).send('Not Found'));

// DB connect
const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodb.uri, config.mongodb.db);
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log('Failed connecting to MongoDB: ', e);
    }
}

// Start server
async function startServer() {
    await connectDB();
    app.listen(config.port, () => console.log(`Server running on port ${config.port}. Press Ctrl+C to quit.`));
}

// Run
startServer();