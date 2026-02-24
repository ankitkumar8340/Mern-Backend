import express from "express"
import dbConnect from "./config/db.js";
import userRouter from "./routes/userRoute.js";
const app = express();
app.use(cors())   //this will give permission to frontend to access api

const StartServer = async () => {
    await dbConnect()
    app.listen(8080, () => console.log("Server Started"));
}
StartServer();

app.use(express.json())
app.use("/api/users", userRouter);








