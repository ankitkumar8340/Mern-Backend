
import {addUser, deleteUser, showUser, login} from "../controllers/userController.js"
import { authenticate, authorize } from "../middleware/auth.js";

import express from "express"

const userRouter = express.Router();
userRouter.get("/",authenticate, authorize("admin"), showUser);   //if get request come it will come here  for  /
userRouter.post("/signup", addUser);   //if post request come it will come here  for /
userRouter.delete("/:id",authenticate, authorize("admin"), deleteUser);  //if delete request come it will come here for delete /:id
userRouter.post("/login", login)

export default userRouter;










