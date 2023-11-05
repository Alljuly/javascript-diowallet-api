import { Schema, model } from "mongoose";

const TransactionSchema = new Schema({
  value: { type: Number, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  createdAt: { type: Date, required: true, default: Date.now() },
});

export default model("transactions", TransactionSchema);
