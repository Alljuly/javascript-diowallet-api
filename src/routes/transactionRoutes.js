import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post(
  "/transactions",
  validationSchemaMiddleware(CreateTransaction),
  transactionController.create
);

transactionRouter.get("/transactions", transactionController.findAllbyUser);


transactionRouter.patch(
  "/transactions",
  transactionController.findOneAndUpdate
);

transactionRouter.delete(
  "/transactions",
  transactionController.findByIdAndRemove
);

export default transactionRouter;
