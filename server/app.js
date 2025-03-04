const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

//routes
const userRoutes = require("./routes/user.routes");
app.use("/api/v1/user" , userRoutes);

const bookRoutes = require("./routes/book.routes");
app.use("/api/v1/book" , bookRoutes);

const reviewRoutes = require("./routes/review.routes");
app.use("/api/v1/review" , reviewRoutes);
module.exports = app;