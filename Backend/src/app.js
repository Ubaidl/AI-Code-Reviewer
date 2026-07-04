import express from "express";
import dotenv from "dotenv";
import connectedDB from "../src/config/connectedDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
connectedDB();
import {authrouter} from "../src/Router/auth.route.js";
import {codeanalyzerouter} from "../src/Router/code.route.js";



app.use(cors({
  origin: ["https://ai-code-reviewer.vercel.app"],
  credentials: true
}))
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api/auth",authrouter);
app.use("/api/code", codeanalyzerouter);


export default app;
