import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'

export const signup = async (req, res) => {
    const {email, password } = req.body;
    try{
        const existingUser = await users.findOne({ email });
        if(existingUser){
            return res.status(404).json({ message: "User already Exists."})
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({ email, password: hashedPassword });
       const token = jwt.sign({ email: newUser.email, id:newUser._id}, process.env.JWT_SECRET , { expiresIn: '1h'});
        res.status(200).json({ result: newUser,token })//token
    } catch(error){
        res.status(500).json({message:"Something went worng..."})
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if(!existingUser){
            return res.status(404).json({ message: "User don't Exist."})
        }

        const isPasswordCrt = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message : "Invalid credentials"})
        }
        const token = jwt.sign({ email: existingUser.email, id:existingUser._id}, process.env.JWT_SECRET , { expiresIn: '1h'});
        res.status(200).json({ result: existingUser,token })//token
    } catch (error)  {
        res.status(500).json({message:"Something went worng..."})
    }
}