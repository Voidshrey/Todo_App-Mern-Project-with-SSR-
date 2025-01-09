import todo from "../models/todo.js";

const postTodo = async (req, res, next) => {
  console.log(req.body);
  let { todoName } = req.body;
  try {
    if (!todoName) {
      return res.status(400).send("todo name cant be empty"); // try Not to use return and see
    }
    let newTodo = await todo.create({
      // Try Not to use await and see
      todoName: todoName,
    });
    //res.status(201).send(newTodo);
    res.redirect("/api/v1/todo");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTodos = async (req, res, next) => {
  try {
    let todos = await todo.find();
    // res.status(200).send(todos);
    res.render("home", { todos });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const getTodo = async (req, res, next) => {
  let { id } = req.params;
  try {
    let todos = await todo.findById(id);
    res.render("update", { todos });
    //   res.status(200).json(todos); //here json is nothing but send
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateTodo = async (req, res, next) => {
  let { id } = req.params;
  try {
    let updatedTodos = await todo.findByIdAndUpdate(
      id,
      { todoName: req.body.todoName, isCompleted: req.body.isCompleted },
      { new: true }
    );
    // res.status(200).json(updatedTodos); //here json is nothing but send
    res.redirect("/api/v1/todo");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTodo = async (req, res, next) => {
  let { id } = req.params;
  try {
    await todo.findByIdAndDelete(id);
    // res.status(200);
    // res.json(`Todo for Id : ${id} deleted successfully`)//here json is nothing but send
    res.redirect("/api/v1/todo");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { postTodo, getTodos, getTodo, updateTodo, deleteTodo };
