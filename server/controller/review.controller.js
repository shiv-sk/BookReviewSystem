const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const Review = require("../models/review.model");

//new Review
exports.newReview = asyncHandler(async(req , res)=>{
    const {userId , bookId , reviewText , rating} = req.body;
    const existReview = await Review.findOne({$and:[{user:userId} , {book:bookId}]});
    if(rating < 1 || rating > 5){
        throw new ApiError(400, "Rating must be between 1 and 5");
    }
    if(existReview){
        throw new ApiError(400 , "You have already reviewed this book");
    }
    const review = await Review.create({
        user:userId,
        book:bookId,
        reviewText,
        rating,
    })
    if(!review){
        throw new ApiError(500 , "new review is not created! ");
    }
    return res.status(201).json(
        new ApiResponse("new created review is! " , review , 201)
    )
});

//get reviews of book
exports.reviewsOfBook = asyncHandler(async(req , res)=>{
    const {bookId} = req.params;
    if(!bookId){
        throw new ApiError(400 , "bookId is required! ")
    }
    const reviews = await Review.find({book:bookId}).populate("user" , "name");
    if(reviews.length === 0){
        return res.status(200).json(
            new ApiResponse("no reviews for this book! " , [] , 200)
        )
    }
    return res.status(200).json(
        new ApiResponse("reviews of a book is! " , reviews , 200)
    ) 
});