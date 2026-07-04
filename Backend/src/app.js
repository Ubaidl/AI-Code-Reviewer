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
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authrouter);
app.use("/api/code", codeanalyzerouter);

export default app;
