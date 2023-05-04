import express from "express";
import cors from "cors";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  config({ path: "./config/config.env" });
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//////+++++++++++++++++++++++++++++++++++++++++//////

import userRouter from './routes/user.js';
import errorHandler from "./middlewares/error.js";

app.use("/api/v1", userRouter);
app.use(errorHandler);

app.get("*", (req, res, next) => {
  res.send("the app is working visit " + `http://127.0.0.1:5173`);
});

//////+++++++++++++++++++++++++++++++++++++++++//////

export default app;
