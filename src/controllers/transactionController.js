import transactionRepository from "../repositories/transactionRepository.js";
import transactionService from "../services/transactionService.js";

async function create(req, res) {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const transaction = await transactionService.create(body, id);
    return res.status(201).send(transaction);
  } catch (err) {
    return res.status(409).send(err.message);
  }
}

async function findAllbyUser(req, res) {
  const { _id: id } = res.locals.user;

  try {
    const transaction = await transactionService.findAllbyUser(id);
    return res.send(transaction);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function findByIdAndRemove(req, res) {
  const bodyId = req.body.id;
  const { _id: id } = res.locals.user;

  try {
    const transaction = await transactionService.findAllbyUser(id);
    transaction.forEach((e) => {
      if (bodyId == e._id) {
        transactionRepository.findByIdAndRemove(e);
        return res.status(201).send("Transaction Removed");
      }
    });

    return res.status(404).send("Transaction Not Found");
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function findOneAndUpdate(req, res) {
  const body = req.body;

  try {
    const transaction = await transactionService.findOneAndUpdate(body);
    return res.status(201).send(transaction);
  } catch (err) {
    return res.status(404).send(err.message);
  }
}

export default { create, findAllbyUser, findByIdAndRemove, findOneAndUpdate};
