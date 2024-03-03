import express from "express";
import { validateArithmeticExpression } from "../middlewares/validation.middleware.js";
import {
  evaluateArithmeticOperation,
  getUserArithmeticOperationsChat,
} from "../controllers/evaluation.controller.js";

const router = express.Router();

router.route("/evaluate").post(validateArithmeticExpression, evaluateArithmeticOperation);
router.route("/chat/:name").get(getUserArithmeticOperationsChat);

export default router;
