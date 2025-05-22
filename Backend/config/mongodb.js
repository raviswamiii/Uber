const mongoose = require("mongoose");

const databaseConnection = () => {
    mongoose.connection.on("connected", () => {
        console.log("Connected to database")
    })

    mongoose.connect(process.env.MONGODB_URI)
}

module.exports = databaseConnection;