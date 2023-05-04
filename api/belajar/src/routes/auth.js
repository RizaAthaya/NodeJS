const router = require("express").Router();
// const { asyncHandler } = require("../middlewares/asyncHandler");
// const checkEmail = require("../middlewares/checkEmail");
const authHandler = require('../middleware/auth')
const {
  signup: signupValidator,
  signin: signinValidator,
} = require("../validators/auth");
const authController = require("../controller/auth.controller");

router
  .route("/signup")
  .post(
    signupValidator,
    authHandler.asyncHandler(authHandler.checkEmail),
    authHandler.asyncHandler(authController.signup)
  );

router
  .route("/signin")
  .post(signinValidator, authHandler.asyncHandler(authController.signin));

module.exports = router;
