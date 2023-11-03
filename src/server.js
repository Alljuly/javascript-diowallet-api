import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";

const app = express();

const port = 5000;

app.use(json());
app.use(authRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
