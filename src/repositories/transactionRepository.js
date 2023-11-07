import TransactionSchema from "../schemas/Transaction.js";

async function create(data) {
  return TransactionSchema.create(data);
}

async function findAllbyUser(id) {
  return await TransactionSchema.find({ userId: id });
}

async function findByIdAndRemove(transaction) {
  await TransactionSchema.findOneAndDelete(transaction);
  return console.log("deletou");
}

async function findOneAndUpdate(filter, update) {
  await TransactionSchema.findByIdAndUpdate(filter, update);
  return TransactionSchema.findById(filter);
}

export default { create, findAllbyUser, findByIdAndRemove, findOneAndUpdate };
