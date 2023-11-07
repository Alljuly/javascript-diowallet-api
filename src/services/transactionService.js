import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
  if (!id) throw new Error("User id is required");
  return await transactionRepository.create({ ...body, userId: id });
}

async function findAllbyUser(id) {
  if (!id) throw new Error("User id is required");

  return await transactionRepository.findAllbyUser(id);
}

async function findByIdAndRemove(transaction) {
  if (!transaction) throw new Error("Transaction is required");
  return await transactionRepository.findByIdAndRemove(id);
}

async function findOneAndUpdate(body) {
  if (!body) throw new Error("Filter and Update is required");
  return await transactionRepository.findOneAndUpdate(body.filter, body.update);
}

export default { create, findAllbyUser, findByIdAndRemove, findOneAndUpdate };
