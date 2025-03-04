const express = require("express");
const Router = express.Router();
const {newBook , updateBook , getAllBooks , getBook , deleteBook} = require("../controller/book.controller");
const {bookCreateSchema , bookUpdateSchema} = require("../validation/book.validation");
const upload = require("../middleware/multer.middleware");
const validateInput = require("../middleware/validation.middleware");
Router.route("/newbook").post(upload.single("coverImage") , validateInput(bookCreateSchema) , newBook);
Router.route("/").get(getAllBooks);
Router.route("/:bookId").get(getBook).patch(upload.single("coverImage") , validateInput(bookUpdateSchema) , updateBook)
.delete(deleteBook);
module.exports = Router;