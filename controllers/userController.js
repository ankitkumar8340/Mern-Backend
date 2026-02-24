import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const SECRET = "hello123";

const addUser = async (req, res)=>{
    const body = req.body;
    const hashPassword = await bcrypt.hash(body.password, 10)
    body.password = hashPassword
    const result = await userModel.create(body)
    res.json(result)
}

const showUser = async (req, res) =>{
    const result = await userModel.find()
    res.json(result);
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const result = await userModel.findByIdAndDelete(id);
    res.json(result);
}

const login = async(req, res)=>{
    const {email, password} = req.body;
    const found = await userModel.findOne({email})      //{email:email} = {email}
    if(found){
        const chkpass = await bcrypt.compare(password, found.password);
        if(chkpass){
            const obj = {
                name:found.name,
                email:found.email,
                role:found.role
            }
            const token = jwt.sign(obj, SECRET,{expiresIn:"1h"});
            res.status(200).json({message:"Success", token});
        }
        else{
            res.status(401).json({message:"Invalid password"})
        }
    }
    else{
        res.status(401).json({message:"User not found"});
    }
}

export {addUser, showUser, deleteUser, login}










