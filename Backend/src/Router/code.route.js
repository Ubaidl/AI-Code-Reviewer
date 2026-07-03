import express from "express";
import {isAuthenticated } from "../middleware/auth.middleware.js";
import {codeanalyzer} from "../controller/codeanalyzer.controller.js";


export const codeanalyzerouter = express.Router();

codeanalyzerouter.post("/analyze", isAuthenticated, codeanalyzer);