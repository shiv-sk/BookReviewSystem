const express = require("express");
const Router = express.Router();
const validateInput = require("../middleware/validation.middleware");
const {reviewCreateSchema} = require("../validation/review.validation");
const {newReview , reviewsOfBook} = require("../controller/review.controller");

Router.route("/new").post(validateInput(reviewCreateSchema) , newReview);
Router.route("/:bookId").get(reviewsOfBook);

module.exports = Router;