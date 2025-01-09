import express from "express";
//import home from '../views/home.ejs';
import {
  getTodos,
  postTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todoController.js";

let router = express.Router();

// POST Create a todo
// /api/v1/todo
// router.post("/");

// router.get("/");

// // params
// // app.get("/users/:userId/books/:bookId",async(req,res,next)=>{
// //    console.log(req.params);
// // })
// router.get("/:id");

// router.put("/:id");

// router.delete("/:id");

router.route("/").get(getTodos).post(postTodo);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

export default router;
