import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { arithmeticOperationSchema } from "../schema/index.js";

const validateArithmeticExpression = asyncHandler(async (req, res, next) => {
  const validation = arithmeticOperationSchema.validate(req.body);

  // perform validation on provided arithmetic operation expression in req body
  if (validation?.error) {
    const errorMessage = validation?.error?.details[0]?.message || "Invalid arithmetic operation !";
    throw new ApiError(400, errorMessage);
  } else {
    // Attach  arithmetic operation data in request after validation
    req.body = validation.value;
    return next(); // control pass to next controller
  }
});

export { validateArithmeticExpression };
