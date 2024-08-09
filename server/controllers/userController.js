const jwt = require("jsonwebtoken");
const User = require("../services/userServices"); // Adjust the path as needed
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(401).json("User already exists");
    }

    const newUser = await User.createUser(name, email, password);
    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json("Invalid credentials");
    }

    const isValidPassword = await User.validatePassword(
      password,
      user.password
    );
    if (!isValidPassword) {
      return res.status(401).json("Invalid credentials");
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
};

const protectedRoute = async (req, res) => {
  try {
    const userInfo = await User.findById(req.user.id);
    res.status(200).json(userInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
};

module.exports = { register, login, protectedRoute };
