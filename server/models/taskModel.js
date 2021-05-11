const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "Untitled",
      trim: true,
      maxlnegth: [40, "Tasks name should be of max length 40 characters"],
    },
    tags: {
      type: Array,
      default: [],
    },
    tagColorCodes: {
      type: Array,
      default: [],
    },
    description: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("TaskSchema", taskSchema);
