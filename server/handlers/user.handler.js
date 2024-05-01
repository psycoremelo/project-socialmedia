import bcrypt from "bcrypt";
import userModel from "../model/user.model.js";

export async function register(req, res) {
  try {
    let {username, email, password } = req.body;
    if(username.length <4) return res.status(400).json({msg: "Username is too small"});
    if(!/[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,6}/.test(email)) return res.status(400).json({msg: "Invalid email"});
    if(password.length <4) return res.status(400).json({msg: "Password is too small"});
    let user = userModel.findOne({ $or: [{ username }, { email } ]});
    if(user && user.username == username) return res.status(400).json({msg: "Email already exists"});
    if(user && user.email == email) return res.status(400).json({msg: "Email already exist"});
    let hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
      username,
      email,
      password: hashedPassword
    });
     return res.status(201).json({msg: "Registeration complete"});
  } catch (error) {
    return res.status(500).json({msg: "Some error occured"});
  }
}