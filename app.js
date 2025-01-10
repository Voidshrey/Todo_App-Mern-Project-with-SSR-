import express from "express";
import db from "./config/todoConfig.js";
import methodOverride from "method-override";
import todoRouter from "./routes/todoRouter.js";

let app = express();

//DB connection
db();

// register template engine
app.set("view engine", "ejs");

app.use(express.json());

//to handle form data
app.use(express.urlencoded({ extended: true }));

// for overrirde post method od a form to delte using a query string
app.use(methodOverride("_method"));

app.use(express.static("public"));

// app.get('/home' ,(req,res ,next) =>{
//     res.render('home',{name : 'Shrey'})
// })

// adding an route to application from router
app.use("/api/v1/todo", todoRouter);

export default app;
