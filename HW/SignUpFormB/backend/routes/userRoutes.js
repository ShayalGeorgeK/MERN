import express from "express";
import { loginHandler, profileHandler, signupHandler } from "../controllers/userController.js";
import { checkAuth } from "../Middleware/auth.js";

const userRouter = express.Router();

// test route
userRouter.get("/", (req, res) => {
  res.send("User route working");
});

//signup
userRouter.post("/api/signup", signupHandler);

// LOGIN
userRouter.post("/api/login",loginHandler);

//authentication
userRouter.get('/profile',checkAuth,profileHandler)

export default userRouter;