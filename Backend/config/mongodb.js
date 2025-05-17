const mongoose = require("mongoose");

const databaseConnection = () => {
    mongoose.connection.on("connected", () => {
        console.log("Database Connected")
    });

    mongoose.connect(process.env.MONGODB_URI)
}

module.exports = databaseConnection;