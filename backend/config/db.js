const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected successfully : ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error while connecting to the database : ${error.message}`);
    }
}

module.exports = connectDB;