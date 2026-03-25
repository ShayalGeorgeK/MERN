import express from "express";
import { loginHandler, profileHandler, signupHandler } from "../controllers/userController.js";
import { checkAuth } from "../Middleware/auth.js";

const userRouter = express.Router();

//signup
userRouter.post("/api/signup", signupHandler);

// LOGIN
userRouter.post("/api/login",loginHandler);

//profile
userRouter.get('/profile',checkAuth,profileHandler)

//create
userRouter.post("/", checkAuth, createPost);

//view
userRouter.get("/", getPosts);

//search
userRouter.get("/:id", getPostById);

//edit
userRouter.put("/:id", checkAuth, updatePost);

//delete
userRouter.delete("/:id", checkAuth, deletePost);

export default userRouter;