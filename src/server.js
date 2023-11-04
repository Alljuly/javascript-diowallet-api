import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

app.use(json());
app.use(authRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on ${port}`));
