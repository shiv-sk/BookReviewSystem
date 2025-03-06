const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const Book = require("../models/book.model");
const uploadOnCloudinary = require("../utils/cloudinary");

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
    const uploadToCloudinary = await uploadOnCloudinary(coverImagePath);
    if(!uploadToCloudinary){
        throw new ApiError(500 , "uploadToCloudinary is not working! ")
    }
    const book = await Book.create({
        title,
        description,
        author,
        publishedYear,
        genre,
        coverImage:uploadToCloudinary,
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

//get Popular books
exports.getPopularBooks = asyncHandler(async (req,res)=>{
    const books = await Book.find().sort({ averageRating: -1 }).limit(5);
    if(books.length === 0){
        throw new ApiError(404 , "books are not found");
    }
    return res.status(200).json(
        new ApiResponse("PopularBooks are" , books)
    )
})

//get newly Added books
exports.getNewlyAddedBooks = asyncHandler(async (req,res)=>{
    const books = await Book.find().sort({ createdAt: -1 }).limit(5);
    if(books.length === 0){
        throw new ApiError(404 , "books are not found");
    }
    return res.status(200).json(
        new ApiResponse("NewlyAddedBooks are" , books)
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


//filter by genre
exports.getBooksByGenre = asyncHandler(async (req,res)=>{
    const {genre} = req.query;
    const books = await Book.find({genre});
    if(books.length === 0){
        throw new ApiError(404 , "books are not found");
    }
    return res.status(200).json(
        new ApiResponse("books are" , books)
    )
})
//exp books
exports.expBooks = async (req, res) => {
    try {
      const { search, page = 1, limit = 5 } = req.query;
      const query = {};
  
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: "i" } },
          { author: { $regex: search, $options: "i" } }
        ];
      }
  
      const books = await Book.find(query)
        .skip((page - 1) * limit) // Skips previous pages
        .limit(parseInt(limit)); // Limits the result per page
  
      const totalBooks = await Book.countDocuments(query);
  
      res.status(200).json({
        books,
        totalPages: Math.ceil(totalBooks / limit),
        currentPage: parseInt(page)
      });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  };