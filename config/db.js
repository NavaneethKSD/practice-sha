const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://mnavaneeth7:scyQ6NswRjhwdniU@cluster0.5mhre.mongodb.net/practice-sha",)
        console.log(`MongoDB Connected: ${conn.connection.host}`);  

    }catch (error) {
        console.log("Error: ", error.message);
    }
};

module.exports = connectDB;