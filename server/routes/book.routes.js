const express = require("express");
const Router = express.Router();
const {newBook , updateBook , getAllBooks , getBook , deleteBook, 
    getPopularBooks, getNewlyAddedBooks,
    expBooks,
    getBooksByGenre} = require("../controller/book.controller");
const {bookCreateSchema , bookUpdateSchema} = require("../validation/book.validation");
const {verifyUser, roleCheck} = require("../middleware/auth.middleware");
const upload = require("../middleware/multer.middleware");
const validateInput = require("../middleware/validation.middleware");
Router.route("/newbook").post(
    verifyUser ,
    roleCheck("Admin"),
    upload.single("coverImage") , 
    validateInput(bookCreateSchema) , 
    newBook);
Router.route("/").get(getAllBooks);
Router.route("/popular").get(getPopularBooks);
Router.route("/newadded").get(getNewlyAddedBooks);
Router.route("/exp").get(expBooks);
Router.route("/filter").get(getBooksByGenre);
Router.route("/:bookId").get(getBook).patch(upload.single("coverImage") , validateInput(bookUpdateSchema) , updateBook)
.delete(deleteBook);
module.exports = Router;