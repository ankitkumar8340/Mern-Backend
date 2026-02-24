
import {addUser, deleteUser, showUser} from "../controllers/userController.js"

import express from "express"

const userRouter = express.Router();
userRouter.get("/showUsers", showUser);
userRouter.post("/addUser", addUser);
userRouter.delete("/delete/:id", deleteUser);

export default userRouter;










