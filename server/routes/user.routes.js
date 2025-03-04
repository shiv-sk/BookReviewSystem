const express = require("express");
const Router = express.Router();
const {register , login , logOut , currentUser , updateUser , deleteUser , 
    getUser , getAllUsers} = require("../controller/user.controller");
const {userRegisterSchema , userLoginSchema , userUpdateSchema} = require("../validation/user.validation");
const validateInput = require("../middleware/validation.middleware"); 
Router.route("/register").post(validateInput(userRegisterSchema) , register);
Router.route("/login").post(validateInput(userLoginSchema) , login);
Router.route("/logout").get(logOut);
Router.route("/me").get(currentUser);
Router.route("/:userId").get(getUser).patch(validateInput(userUpdateSchema) , updateUser).delete(deleteUser);

module.exports = Router;