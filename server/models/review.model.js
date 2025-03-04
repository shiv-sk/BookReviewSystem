const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book",
        required:true,
    },
    reviewText:{
        type:String,
        trim:true,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
} , {timestamps:true});

const Review = mongoose.model("Review" , reviewSchema);
module.exports = Review;