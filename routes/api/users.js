const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

//config value
dotenv.config();
const jwtSecret = require("../../config/keys").jwtSecret;

//User Model
const User = require("../../models/User");


//@route POST api/uSers
//@desc Get All Users
//access PUBLIC
//CAN SERVE AS LOGIN TOO

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "please enter all fields" });
  }

  //check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    } else {
      const newUser = new User({
        name,
        email,
        password,
      });
      //create salt and hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
          .then((user) => {
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
          });
        });
      });
    }
  });
});

//@route GET api/users
//@desc Get ONE users
//PUBLIC

router.get("/user", async (req, res) => {
  try {
    const body = await req.body;
    console.log(body);
    res.send(body);
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
