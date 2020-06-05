const express = require("express");
const router = express.Router();


//Todo Model
const Todo = require('../../models/Todo');

//@route GET api/todos
//@desc Get All todos

router.get('/', (req, res) => {
    Todo.find()
      .sort({ date: -1 })
      .then((todos) => res.json(todos));
});


//@route GET api/todos
//@desc Get ONE todos

router.get('/', (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then((todos) => res.json(todos));
});


//@route POST api/todos
//@desc POST a todo
router.post('/', async(req, res) => {
  
    const newTodo = new Todo ({
      title: req.body.title
    });

    newTodo.save()
    .then(todos => res.json(todos));
 
});


//@route DELETE api/todos
//@desc DELETE a todo
router.delete('/', async(req, res) => {
  
  const newTodo = new Todo ({
    title: req.body.title
  });

  newTodo.save()
  .then(todos => res.json(todos));

});



module.exports = router;