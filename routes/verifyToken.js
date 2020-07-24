const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denid");

  try {
    const verified = jwt.verify(token, "klsjglksjlfjsa");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
module.exports = verify
