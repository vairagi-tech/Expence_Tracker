const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");
//route
const router = express.Router();

//for sign in
router.post("/login", loginController);

//for sign up
router.post("/register", registerController);

module.exports = router;
