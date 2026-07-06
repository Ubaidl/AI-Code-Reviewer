import express from "express";
import dotenv from "dotenv";
import connectedDB from "../src/config/connectedDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
connectedDB();
import {authrouter} from "../src/Router/auth.route.js";
import {codeanalyzerouter} from "../src/Router/code.route.js";



const app = express();
// const allowedOrigins = [
//   "http://localhost:5174",
//   "https://ai-code-reviewer-kappa-three.vercel.app"
// ];




app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174", // optional, if Vite sometimes uses 5174
    "https://ai-code-reviewer-weld-tau.vercel.app"
  ],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authrouter);
app.use("/api/code", codeanalyzerouter);

export default app;
