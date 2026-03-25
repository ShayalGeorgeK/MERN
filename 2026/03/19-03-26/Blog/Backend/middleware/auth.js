import { sessions, users } from "../models/userModel.js";

export function checkAuth(req,res,next) {

    const user = users.find(u => u.id === sessions.userId);

    if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;
    next();

}