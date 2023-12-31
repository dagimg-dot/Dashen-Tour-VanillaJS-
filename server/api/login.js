const bcrypt = require("bcryptjs");

const User = require("../model/user");
const errorHandler = require("../utils/errorHandler");

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      error: {
        message: "Email or Password not present",
      },
    });
  } else {
    try {
      User.findOne({ where: [{ email: email }] }).then((user) => {
        if (!user) {
          res.status(404).json({
            error: {
              message: "Login failed",
            },
          });
        } else {
          bcrypt.compare(password, user.password).then((result) => {
            result
              ? res.status(202).json({
                  status: 202,
                  message: "Success",
                  data: { user },
                })
              : res.status(400).json({ error: { message: "Login failed" } });
          });
        }
      });
    } catch (error) {
      errorHandler(error);
    }
  }
};

module.exports = login;
