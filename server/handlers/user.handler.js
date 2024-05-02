import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/user.model.js";

const { sign } = jwt;  

export async function register(req, res) {
  try {
    let { username, email, password } = req.body;
    if (username.length < 4) return res.status(400).json({ msg: "Username is too small" });
    if (!/[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,6}/.test(email)) return res.status(400).json({ msg: "Invalid email" });
    if (password.length < 4) return res.status(400).json({ msg: "Password is too small" });
    let user = userModel.findOne({ $or: [{ username }, { email }] });
    if (user && user.username == username) return res.status(400).json({ msg: "Email already exists" });
    if (user && user.email == email) return res.status(400).json({ msg: "Email already exist" });
    let hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
      username,
      email,
      password: hashedPassword
    });
    return res.status(201).json({ msg: "Registeration complete" });
  } catch (error) {
    return res.status(500).json({ msg: "Some error occured" });
  }
}

export async function login(req, res) {
  try {
    let { username, password } = req.body;
    let user = await userModel.findOne({ username });
    if (!user) return res.status(401).json({ msg: "Invalid username or password" });
    let isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      let token = await sign({
        username: user.username,
        userId: user._id
      }, process.env.SECRET_KEY, {
        expiresIn: "24h"
      });
      return res.status(200).json({ msg: "Login successfully", token });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "some error occured" });
  }
}