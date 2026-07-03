import express from "express";
import {registeruser,loginuser,logoutuser} from "../controller/auth.controller.js";

export const authrouter = express .Router();

authrouter.post("/register",registeruser);
authrouter.post("/login",loginuser);
authrouter.get("/logout",logoutuser);