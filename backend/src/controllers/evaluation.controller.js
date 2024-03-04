import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ArithmeticOperationModel } from "../models/ArithmeticOperations.model.js";

const evaluateArithmeticOperation = asyncHandler(async (req, res) => {
  const { name, valueToEvaluate } = req.body;
  const evaluatedResult = eval(valueToEvaluate);

  // create new entry to store the arithmetic operation in database
  const createdResult = await ArithmeticOperationModel.create({
    name,
    arithmeticExpression: valueToEvaluate,
    evaluatedResult,
  });
  if (!createdResult) {
    throw new ApiError(500, "Something went wrong while while storing operation in database ");
  }
  new ApiResponse(200, { result: createdResult }, "value evaluated successfully !").send(res);
});

// controller to retrieve arithmetic operations chat of specific user by name
const getUserArithmeticOperationsChat = asyncHandler(async (req, res) => {
  const { name } = req.params;
  if (!name?.trim()) {
    throw new ApiError(500, "Name is required ");
  }
  const arithmeticOperations = await ArithmeticOperationModel.find({ name }, { __v: 0 });
  new ApiResponse(
    200,
    { chatConversation: arithmeticOperations },
    "chat fetched successfully !",
  ).send(res);
});

export { evaluateArithmeticOperation, getUserArithmeticOperationsChat };
