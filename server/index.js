//all the middlewares lies here/
console.log("hello from index.js");
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/tasksRoutes");

const app = express();
app.use(express.json());//this middleware helps to make the entire request thing and response into the json format ie. whenever we send any thing to the server then the data s sent to the server as text so this middleware hels to change that to json and identify
app.use("/api/tasks/", taskRouter);
// app.use('/api/users/',userRouter)

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

module.exports = app;
