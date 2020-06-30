const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

//config value
dotenv.config();
const jwtSecret = require("../../config/keys").jwtSecret;

//User Model
const User = require("../../models/User");


//@route POST api/auth
//@desc Auth user
//access PUBLIC

router.post("/", (req, res) => {
  const { email, password } = req.body;

  //validation
  if ( !email || !password) {
    return res.status(400).json({ message: "please enter all fields" });
  }

  //check for existing user
  User.findOne({ email })
  .then((user) => {
    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    } else {
     
      //VALIDATE PASSSWORD
      bcrypt.compare(password, user.password)
      .then(isMatch => {
          if(!isMatch) return res.status(400).json({message: "Invalid Credentials"})
          jwt.sign(
            { id: user.id },
            jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
      })
    }
  });
});


//@route GET api/auth/user
//@desc Get Get user data
//PRIVATE

router.get("/user", auth, async (req, res) => {
 
    const user  = await User.findById(req.user.id)
    //the .select is so you can select just the ID removing the password
    .select('-password')
    .then(user => res.json(user))
});

module.exports = router;


//create salt and hash
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       if (err) throw err;
//       newUser.password = hash;
//       newUser.save()
//       .then((user) => {
//         jwt.sign(
//           { id: user.id },
//           jwtSecret,
//           { expiresIn: 3600 },
//           (err, token) => {
//             if (err) throw err;
//             res.json({
//               token,
//               user: {
//                 id: user.id,
//                 name: user.name,
//                 email: user.email,
//               },
//             });
//           }
//         );
//       });
//     });
//   });









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
