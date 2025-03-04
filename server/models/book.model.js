const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
        index:true,
    },
    author:{
        type:String,
        trim:true,
        required:true,
        index:true,
    },
    description:{
        type:String,
        trim:true,
        required:true,
        index:true,
    },
    genre:{
        type:String,
        trim:true,
        required:true,
        index:true,
    },
    coverImage:{
        type:String,
        trim:true,
        required:true,
        index:true,
    },
    publishedYear:{
        type:Number,
        trim:true,
        required:true,
        index:true,
    },
} , {timestamps:true});

const Book = mongoose.model("Book" , bookSchema);
module.exports = Book;