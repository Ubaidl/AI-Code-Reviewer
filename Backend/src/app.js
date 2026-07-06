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



const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://ai-code-reviewer-weld-tau.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      origin.endsWith(".vercel.app")
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authrouter);
app.use("/api/code", codeanalyzerouter);

export default app;
