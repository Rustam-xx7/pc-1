import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    title: {type: String,  default:"hello" , required: true},
    desc: String,
    isDone: Boolean,
});

export const Todo = mongoose.model('Todo', TodoSchema);