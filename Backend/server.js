const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const databaseConnection = require("./config/mongodb");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");
dotenv.config();
const cookieParser = require("cookie-parser");

databaseConnection();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hellow my world.");
}) 

app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})