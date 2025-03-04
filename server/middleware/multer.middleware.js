const multer  = require('multer');
const path = require("path");
const allowedExtensions = [".jpeg" , ".jpg" , ".png" , ".gif" , ".webp"];
const allowedMimes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
const storage = multer.diskStorage({
    destination:function(req , file , cb){
        cb(null, './temp/coverImages');
    },
    filename:function(req , file , cb){
        cb(null , file.fieldname + Date.now());
    }
})

const fileFilter = function(req , file , cb){
    const extension = allowedExtensions.includes(path.extname(file.originalname).toLocaleLowerCase());
    const mimeType = allowedMimes.includes((file.mimetype));
    if(extension && mimeType){
        return cb(null , true);
    }else{
        return cb(new Error("Only image files (JPEG, PNG, GIF, WEBP) are allowed!"));
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter:fileFilter
})

module.exports = upload;