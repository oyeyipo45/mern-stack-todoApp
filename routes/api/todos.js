const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth")

//Todo Model
const Todo = require("../../models/Todo");

//@route GET api/todos
//@desc Get All todos

router.get("/", (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then((todos) => res.json(todos));
});

//@route GET api/todos
//@desc Get ONE todos

router.get("/:id", (req, res) => {
  Todo.findById(req.params.id)
  .then((todo) => res.json(todo));
});

//@route POST api/todos
//@desc POST a todo
//ACCESS PRIVATE
router.post("/",auth,  (req, res) => {
  const newTodo = new Todo({
    todo: req.body.todo,
  });
  newTodo.save().then((todos) => res.json(todos));
});

router.patch("/:id", (req, res) => {
  const Todo = Todo.findById(req.params.id)
  .then((todo) => res.json(todo));
  const newTodo = new Todo({
    title: req.body.title,
  });
  newTodo.save().then((todos) => res.json(todos));
});

//@route DELETE api/todos
//@desc DELETE a todo
//ACCESS PRIVATE
router.delete("/:id",auth,  async (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => todo.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ message: Error404 }));
});

module.exports = router;
