const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const databaseConnection = require("./config/mongodb")
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");
const cookieParser = require("cookie-parser");

dotenv.config();
databaseConnection();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.use("/user", userRouter)

app.listen(port, () => {
    console.log(`Server is runnining on port: ${port}`)
});