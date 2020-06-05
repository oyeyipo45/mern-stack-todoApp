const express = require("express");
const router = express.Router();


//Todo Model
const Item = require('../../models/Todo');

//@route GET api/todos
//@desc Get All todos



router.get('/', (req, res) => {
    Item.find()
      .sort({ date: -1 })
      .then((items) => res.json(items));
});



module.exports = router;