const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const databaseConnection = require("./config/mongodb");
const userRouter = require("./routes/userRoute");
const cookieParser = require("cookie-parser");
const captainRouter = require("./routes/captainRoute");
const dotenv = require("dotenv");
const cors = require("cors");
const mapRouter = require("./routes/mapRoutes");
const rideRouter = require("./routes/rideRoutes");

dotenv.config();

databaseConnection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hellow my world.");
}) 

app.use("/user", userRouter);
app.use("/captain", captainRouter);
app.use("/maps", mapRouter);
app.use("/rides", rideRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})