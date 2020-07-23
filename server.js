const express = require("express");
const app = express();
const dotenv = require ('dotenv')
const mongoose = require("mongoose");

//Import Routes
const authRoute = require("./routes/auth");

dotenv.config();

//Connect to DB
mongoose.connect('mongodb+srv://soran011:soran011@cluster0.iiib7.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true },() => 
console.log("connected to db!")
);

//Middleware
app.use(express.json());


//Routes Middleware
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server Up and Running"));
