const mongoose = require("mongoose")
const Schema = mongoose.Schema;



//Create Schema 
// const TodoSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     },
// });


// module.exports = Todo = mongoose.model('todo', TodoSchema);


//create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now 
    }
});


module.exports = Item = mongoose.model('item', ItemSchema)