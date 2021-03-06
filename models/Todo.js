const mongoose = require("mongoose")
const Schema = mongoose.Schema;



//create Schema
const TodoSchema = new Schema({
    todo: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now 
    }
});


module.exports = Todo = mongoose.model('item', TodoSchema)