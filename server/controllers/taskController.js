const mongoose = require("mongoose");
const TaskSchema = require("../models/taskModel");

exports.getAlltasks = async (req, res) => {
  try {
    const tasks = await TaskSchema.find();
    console.log(tasks);
    res.status(200).json({
      status: "success",
      data: tasks,
    });
  } catch (error) {
    console.log("Error in fetching all the tasks from DB");
    console.log(error);
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

exports.createTasks = async (req, res) => {
  try {
    console.log(req.body);
    const newTask = await TaskSchema.create(req.body);
    console.log(newTask);

    res.status(201).json({
      status: "success",
      data: {
        task: newTask,
      },
    });
  } catch (error) {}
  console.error("Error in creating the new task in DB ");
  console.log(error);
  res.status(404).json({
    status: "failed",
    message: error,
  });
};
