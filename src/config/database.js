import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
	try {
		await mongoose.connect(process.env.DATABASE_URI);
		console.log("Atlas mongo connect");
	} catch (error) {
		console.log("aaa", error.message);
	}
}

export async function disconnDB() {
	await mongoose.disconnect();
}
