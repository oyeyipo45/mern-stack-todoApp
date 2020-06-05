const express = require("express");
const router = express.Router();


//Todo Model
const Item = require('../../models/Todo');

//@route GET api/todos
//@desc Get All todos

// router.get("/", async (req, res) => {
//   try {
//     const result = await Todo.find().sort({ date: -1 });
//     console.log(result);
//     return res.json(result);
//   } catch (err) {
//     (err) => console.log(err);
//   }
// });

router.get('/', (req, res) => {
    Item.find()
      .sort({ date: -1 })
      .then((items) => res.json(items));
});

//@route POST api/todos
//@desc POST All todos

// router.post("/", async (req, res) => {
//     try {
//       const newTodo = new Todo({
//           title: req.body.title
//       })
//       newTodo.save
//       return res.json(newTodo);
//     } catch (err) {
//       (err) => console.log(err);
//     }
// });

// router.post('/',async (req, res) => {
    
//     const { title } = req.body;
//     console.log(req.body)
//     let todo = {}
//     todo.title = title
//     const newTodo = new Todo({
//         todo
//     });
//     await newTodo.save();
//     res.json(newTodo)
// });
  

module.exports = router;