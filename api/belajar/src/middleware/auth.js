const asyncHandler = (cb) => async (req, res, next) => {
  try {
    await cb(req, res, next);
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
  return true;
};

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  User.findByEmail(email, (_, data) => {
    if (data) {
      res.status(400).send({
        status: "error",
        message: `A user with email address '${email}' already exits`,
      });
      return;
    }
    next();
  });
};

const validatorHandler = (req, res, next, schema) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({
      status: "error",
      message: error.details[0].message.replace("/[^a-zA-Z0-9 ]/g", ""),
    });
    return;
  }
  next();
};

module.exports = {
  asyncHandler,
  checkEmail,
  validatorHandler
};
