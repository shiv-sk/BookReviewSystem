const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Token = (user)=>{
    try {
        return jwt.sign({ id: user._id, name: user.name }, process.env.JWT_TOKEN_SECRET, { expiresIn: process.env.JWT_TOKEN_EXPIRY });
    } catch (error) {
        throw new ApiError(500 , "token is not created! ");
    }
}

//user Authorization
exports.currentUser = asyncHandler(async(req , res)=>{
    const token = req.cookies.accessToken;
    if(!token){
        return res.status(401).json(
            new ApiResponse("Unauthorized", {} , 401)
        )
    }
    decodeToken = jwt.verify(token , process.env.JWT_TOKEN_SECRET);
    const user = await User.findById(decodeToken.id).select("-password");
    if(!user){
        throw new ApiError(404 , "user not found! ");
    }
    return res.status(200).json(
        new ApiResponse("the user is! " , user , 200)
    )
})

//logout user
exports.logOut = asyncHandler(async(req , res)=>{
    const token = req.cookies?.accessToken;
    if(!token){
        return res.status(401).json(
            new ApiResponse("Unauthorized", {} , 401)
        )
    }
    decodeToken = jwt.verify(token , process.env.JWT_TOKEN_SECRET);
    const user = await User.findById(decodeToken.id).select("-password");
    if(!user){
        throw new ApiError(404 , "user not found! ");
    }
    const cookieOptions = {
        httpOnly:true,
        secure:true,
        sameSite:"strict",
    }
    return res.clearCookie("accessToken" ,cookieOptions).status(200).json(
        new ApiResponse("user is logout successfully! " , {} , 200)
    )
})

exports.register = asyncHandler(async (req,res)=>{
    const {name , email , password , role} = req.body;
    const existUser = await User.findOne({$and:[{email} , {name}]});
    if(existUser){
        throw new ApiError(400 , "user already exists");
    }
    const user = await User.create({
        name,
        email,
        password,
        role
    })
    if(!user){
        throw new ApiError(500 , "user is not created");
    }
    if(user){
        user.password = undefined
        
    }
    const accessToken = Token(user);
    const options = {
        httpOnly:true,
        secure:true,
        sameSite:"strict",
    }
    return res.status(201).cookie("accessToken" , accessToken , options).json(
        new ApiResponse("user is created" , user , 200)
    )
})

exports.login = asyncHandler(async(req,res)=>{
    const {email , password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        throw new ApiError(404 , "user is not found");
    }
    const ispasswordvalid = await user.ispasswordcorrect(password);
    if(!ispasswordvalid){
        throw new ApiError(400,"password is incorrect");
    }
    user.password = undefined;
    const options = {
        httpOnly:true,
        secure:true,
        sameSite:"strict",
    }
    const accessToken = Token(user);
    return res.status(200).cookie("accessToken" , accessToken , options).json(
        new ApiResponse("user is logedIn" , user  , 200)
    )
})

//findbyId
exports.getUser = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.params.userId);
    if(!user){
        throw new ApiError(404 , "user not found");
    }
    user.password = undefined;
    return res.status(200).json(
        new ApiResponse("user is" , user)
    )
})

//getAllUsers
exports.getAllUsers = asyncHandler(async (req,res)=>{
    const users = await User.find();
    if(!users){
        throw new ApiError(404 , "users are not found");
    }
    return res.status(200).json(
        new ApiResponse("users are" , users)
    )
})

//update user
exports.updateUser = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.params.userId);
    if(!user){
        throw new ApiError(404 , "user not found");
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.userId , req.body , {new:true , runValidators:true});
    if(!updatedUser){
        throw new ApiError(500 , "user is not updated");
    }
    return res.status(200).json(
        new ApiResponse("updated user is" , user)
    )
})

//deleteUser 
exports.deleteUser = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.params.userId);
    if(!user){
        throw new ApiError(404 , "user not found");
    }
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if(!deletedUser){
        throw new ApiError(400 , "user is not deleted");
    }
    return res.status(204).json(
        new ApiResponse("user is deleted")
    )
})