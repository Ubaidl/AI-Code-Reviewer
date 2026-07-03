import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registeruser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            console.log("Missing fields");
            return res.status(400).json({ message: "please fill all fields" })

        }

        const existinguser = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (existinguser) {
             console.log("User already exists");
            return res.status(400).json({ message: "user already exist" })

        }

        const user = await User.create({
            username,
            email,
            password,
        })
        console.log(user.password);
        res.status(201).json({
            success: true,
            message: "user created scuuessfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};
export const loginuser = async (req, res) => {
    try {

         console.log(req.body);
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "please fill all fields" })

        }
        const user = await User.findOne({ email });
        if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
}
        const ispasswordmatch = await user.comparePassword(password);
        if (!ispasswordmatch) {
            return res.status(400).json({ message: "password incorrect" });

        }

        const token = jwt.sign({
            id: user._id,
            username: user.username,
            email: user.email
        },
            process.env.JWT_SECRET, { expiresIn: "5h" });


        res.cookie("token", token, {
            httpOnly: true,
        });
        return res.status(200).json({
            success: true,
            message: "user logged in successfully",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,

            }
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};
export const logoutuser = async(req,res)=>{
    try{
        res.clearCookie("token");
        return res.status(200).json({
            success:true,
            message:"user logged out successfully"
        })


    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
