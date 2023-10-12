require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { errorHandler } = require("./Middlewares/errorMiddleware");
const routeError = require("./Middlewares/routeMiddleware");
const connectDB = require("./Config/db");
const studentRoute = require("./Routes/StudentRoute");



connectDB();
//use middlware cookieParser
app.use(cors({ origin: true, credentials: true }));

app.use(express.json());

// app.use("/api/students", studentRoute);
app.use("/api/students/",studentRoute);


// app.use("*", routeError);



app.use(errorHandler);

port = process.env.PORT;

// start server
app.listen(port, () => console.log("Server Started: " + port));

module.exports = app;
