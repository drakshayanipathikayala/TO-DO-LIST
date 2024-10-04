import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todolist.pefmmxt.mongodb.net/?retryWrites=true&w=majority&appName=ToDoList`;
                        
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the Database:', error.message);
    }

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.error('Database connection error:', error.message);
    });
};
export default Connection;
