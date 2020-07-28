const router = require("express").Router();
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("./validation");
const bcrypt = require("bcryptjs");
const verify = require("./verifyToken");
const { v4: uuidv4 } = require('uuid');
router.post("/register", async (req, res) => {
  //Validated the data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the user already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");
  // Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  //Creat New User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const newUser = await user.save();
    
    const token =  jwt.sign({ _id: newUser._id }, process.env.TOKEN_SEC);

    const savedUser = {newUser, token}
    res.send(savedUser);
    // res.send({user: user._id}); if I want the id only
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  console.log(req.body)
  //Validated the data
  const { error } = loginValidation(req.body);
  console.log(error)
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is wrong");

  //If Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Password is wrong");

  //Creat and asign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SEC);
  res.header("auth-token", token).send(token);
});

// user details

router.get("/me", verify, async (req, res) => {
  const token = req.headers["auth-token"];
  const { _id } = jwt.decode(token);
  const user = await User.findById(_id);

  res.send({
    name: user.name,
    email: user.email,
    date: user.date,
    transactions: user.transactions,
  });
});

//Add Transaction
router.post("/addTransaction", verify, async (req, res) => {
  const token = req.headers["auth-token"];
  const { _id } = jwt.decode(token);
  const addedTransaction = req.body;
  const user = await User.findById(_id);
  user.transactions.push({
    text: addedTransaction.text,
    amount: addedTransaction.amount,
    date: Date.now(),
    id: uuidv4(),
  });
  await user.save();
  res.send(user.transactions);
});


//Delete Transaction 
router.post("/deleteTransaction", verify, async (req, res) => {
  const token = req.headers["auth-token"];
  const { _id } = jwt.decode(token);
  const transactionId = req.body.id;
  const user = await User.findById(_id);
  user.transactions = user.transactions.filter((o)=>{return o.id !==transactionId })
  await user.save();
  res.send(user.transactions);
});
module.exports = router;
