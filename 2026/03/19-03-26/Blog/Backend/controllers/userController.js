import users from "../models/userModel.js";
import { sessions } from "../models/userModel.js";
import { idcounter } from "../models/userModel.js";

export const signupHandler=(req, res) => {
  const { username,emailid,password } = req.body;

  if(!username||!emailid||!password){
    return res.status(400).json({
      message:"Fill the details"
    })
  }

  const existingUser = users.find(u => u.username === username);

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists"
    });
  }

  const newUser = { username,emailid, password };

  users.push(newUser);

  console.log("Users:", users);

  res.json({
    message: "Signup successful",
    id:++idcounter,
    username: username,
    emailid: emailid,
    password: password
  });
}


export const loginHandler= (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  sessions.push({
    userId:user.id
  })

  res.json({
    message: "Login successful",
    username: user.username,
    userId:user.id
  });
}

export const profileHandler = (req,res) => {
  res.json({
    message: "Profile data",
    user: req.user
  });
}

export const logoutHandler = (req,res)