const express = require("express");
const app = express();
// const dotenv = require ('dotenv')
const mongoose = require("mongoose");

//Import Routes
const authRoute = require("./routes/auth");
// const postRoute = require('./routes/posts');

// dotenv.config();

//Connect to DB
mongoose.connect('mongodb+srv://soran011:soran011@cluster0.iiib7.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true },() => 
console.log("connected to db!")
);

//Middleware
app.use(express.json());


//Routes Middleware
app.use("/", authRoute);
// app.use('/post', postRoute);


app.listen(8080, () => console.log("Server Up and Running"));
