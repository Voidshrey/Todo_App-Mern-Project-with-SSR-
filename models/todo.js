import mongoose from "mongoose";


//model , ODM schema for persistance

const Todo = new mongoose.Schema(
  {
    todoName: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

let todo = mongoose.model("toDoMongoose", Todo);

export default todo;
