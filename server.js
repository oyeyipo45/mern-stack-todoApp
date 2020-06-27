const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const path = require("path")

//Getting Routes
const todos = require("./routes/api/todos")


//Apply Middleware
app.use(morgan("tiny"));

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// const bodyParser = require("body-parser")
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

//db config
const db = require('./config/keys').mongoURI

//connect to Mongo 
 mongoose
    .connect(db, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .then(() => console.log('MongoDB connected..!'))
    .catch((err) => console.log(err))



   
//Use Routes
app.use('/api/todos', todos)

//SERVER STATIC ASSESTS IF IN PRODUCTION
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(`client/build`));

  app.get(`*`, (req, res) => {
    res.sendFile(path.resolve(__dirname, `client`, `build`, `index.html`))
  });
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`))



