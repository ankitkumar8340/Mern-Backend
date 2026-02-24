import mongoose from "mongoose"
const dbConnect = async ()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/merndatabase")
    console.log("Mongodb connected");
    }catch(err){
        console.log("Mongodb not connected");
    }
};

export default dbConnect;




























