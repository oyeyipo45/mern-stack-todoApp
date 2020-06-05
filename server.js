const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();

//Getting Routes
const todos = require("./routes/api/todos")



//Apply Middleware
app.use(morgan("tiny"));

//body parser middleware
app.use(express.json());

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




const port = process.env.PORT || 5000
app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`))




//Connect to Mongo
// mongoose
// .connect(db)
// .then(() => console.log('Mongo Connected....'))
// .catch(err => console.log(err));

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(db, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
