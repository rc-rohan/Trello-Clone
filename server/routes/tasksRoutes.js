const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

router
  .route("/")
  .get(taskController.getAlltasks)
  .post(taskController.createTasks);


module.exports = router