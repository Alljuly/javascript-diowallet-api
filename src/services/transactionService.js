import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
  if (!id) throw new Error("User id is required");
  return await transactionRepository.create({ ...body, userId: id });
}

async function findAllbyUser(id) {
  if (!id) throw new Error("User id is required");

  return await transactionRepository.findAllbyUser(id);
}

export default { create, findAllbyUser };
