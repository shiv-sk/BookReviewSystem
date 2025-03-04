const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const Book = require("../models/book.model");

//new Book
exports.newBook = asyncHandler(async(req , res)=>{
    const {title , description , author , publishedYear , genre} = req.body;
    const existBook = await Book.findOne({$and:[{title} , {author}]});
    if(existBook){
        throw new ApiError(400 , "Book already exist! ");
    }
    const coverImagePath = req.file?.path;
    if(!coverImagePath){
        throw new ApiError(500 , "coverImage Path is not found! ")
    }
    const book = await Book.create({
        title,
        description,
        author,
        publishedYear,
        genre,
        coverImage:coverImagePath,
    })
    if(!book){
        throw new ApiError(500 , "new Book is not created! ");
    }
    return res.status(201).json(
        new ApiResponse("new created book is! " , book , 201)
    )
});

//findbyId
exports.getBook = asyncHandler(async (req,res)=>{
    const book = await Book.findById(req.params.bookId);
    if(!book){
        throw new ApiError(404 , "Book not found");
    }
    return res.status(200).json(
        new ApiResponse("book is" , book)
    )
})

//getAllBooks
exports.getAllBooks = asyncHandler(async (req,res)=>{
    const books = await Book.find();
    if(books.length === 0){
        throw new ApiError(404 , "books are not found");
    }
    return res.status(200).json(
        new ApiResponse("books are" , books)
    )
})

//updateBook
exports.updateBook = asyncHandler(async (req,res)=>{
    const book = await Book.findById(req.params.bookId);
    if(!book){
        throw new ApiError(404 , "book not found");
    }
    if(req.file){
        coverImagePath = req.file?.path;
        if(coverImagePath){
            req.body.coverImage = coverImagePath;
        }
    }
    const updatedbook = await Book.findByIdAndUpdate(req.params.bookId , req.body , {new:true , runValidators:true});
    if(!updatedbook){
        throw new ApiError(500 , "book is not updated");
    }
    return res.status(200).json(
        new ApiResponse("updated book is" , updatedbook)
    )
})

//deleteBook 
exports.deleteBook = asyncHandler(async (req,res)=>{
    const book = await Book.findById(req.params.bookId);
    if(!book){
        throw new ApiError(404 , "book not found");
    }
    const deletedBook = await Book.findByIdAndDelete(req.params.bookId);
    if(!deletedBook){
        throw new ApiError(400 , "book is not deleted");
    }
    return res.status(204).json(
        new ApiResponse("book is deleted")
    )
})