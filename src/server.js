import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";
import transactionRouter from "./routes/transactionRoutes.js";
import cors from "cors";
dotenv.config();

const app = express();

connectDB();
app.use(json());
app.use(cors());
app.use(authRouter);
app.use(transactionRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on ${port}`));
