import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

export const isAuthenticated = (req,res,next)=>{
    try{
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

        if(!token){
            return res.status(401).json({message:"Unauthorized"})

        }
        const decode = jwt .verify(token,process.env.JWT_SECRET);

        if(!decode){
            return res.status(401).json({message:"Unauthorized"})

        }
        req.user =decode;
        next();


   } catch(error){
    return res.status(401).json({message:"Unauthorized"});
   }
};