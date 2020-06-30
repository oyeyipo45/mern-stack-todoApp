const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");


//User Model
const User = require("../../models/User");


//@route GET api/uSers
//@desc Get All Users
//access PUBLIC

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if(!name || !email || !password){
  return res.status(400).json({message: "please enter all fields"})
}

//check for existing user
User.findOne({email})
  .then(user => {
    if(user) {
      return res.status(400).json({message: "user already exists"})
    } else {
      const newUser = new User({
        name, email, password
      })
       //create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save()
        .then(user => {
            res.json({
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              }
            })
        })
      })
    })
    }

   
  })
});


//@route GET api/users
//@desc Get ONE users
//PUBLIC 

router.get("/", async (req, res) => {
  try {
   const body = await req.body
   console.log(body);
   
  } catch (error) {
    console.log(error);
    
  }
 });
 
 

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
  