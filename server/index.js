//all the middlewares lies here/
console.log("hello from index.js")
const express = require("express");
const morgan = require("morgan");
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/tasksRoutes')

const app = express();

// app.use('/api/tasks/',taskRouter);
// app.use('/api/users/',userRouter)

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

module.exports = app;