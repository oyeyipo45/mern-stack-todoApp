const express = require("express");
const router = express.Router();


//Todo Model
const Todo = require('../../models/Todo');

//@route GET api/todos
//@desc Get All todos

router.get("/", async (req, res) => {
  try {
    const result = await Todo.find().sort({ date: -1 });
    return res.json(result);
  } catch (err) {
    (err) => console.log(err);
  }
});


module.exports = router;