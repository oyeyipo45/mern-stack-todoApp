const express = require("express");
const router = express.Router();


//User Model
const User = require("../../models/User");


//@route GET api/uers
//@desc Get All Users


router.post("/", (req, res) => {
  res.send('register');
});


//@route GET api/todos
//@desc Get ONE todos

module.exports = router; 















// router.get("/:id", (req, res) => {
//     Todo.findById(req.params.id)
//     .then((todo) => res.json(todo));
//   });
  
//   //@route POST api/todos
//   //@desc POST a todo
//   router.post("/", (req, res) => {
//     const newTodo = new Todo({
//       todo: req.body.todo,
//     });
//     newTodo.save().then((todos) => res.json(todos));
//   });
  
//   router.patch("/:id", (req, res) => {
//     const Todo = Todo.findById(req.params.id)
//     .then((todo) => res.json(todo));
//     const newTodo = new Todo({
//       title: req.body.title,
//     });
//     newTodo.save().then((todos) => res.json(todos));
//   });
  
//   //@route DELETE api/todos
//   //@desc DELETE a todo
//   router.delete("/:id", async (req, res) => {
//     Todo.findById(req.params.id)
//       .then((todo) => todo.remove().then(() => res.json({ success: true })))
//       .catch((err) => res.status(404).json({ message: Error404 }));
//   });
  