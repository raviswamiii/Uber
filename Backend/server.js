const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const dbConnection = require("./config/db");
const userRouter = require("./routes/userRoute");
const cookieParser = require("cookie-parser");
const captainRouter = require("./routes/captainRoute");

dbConnection();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello My World");
})

app.use("/user", userRouter);
app.use("/captain", captainRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})