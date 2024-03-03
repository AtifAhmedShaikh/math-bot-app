import Joi from "joi";

const arithmeticExpressionPattern = /^\d+(\s*[\+\-\*/]\s*\d+)*$/;

const arithmeticOperationSchema = Joi.object({
  name: Joi.string().min(5).max(30).required().messages({
    "string.min": "name must have at least 5 characters",
    "string.max": "name must less then 30 characters",
    "any.required": "name is required ",
    "string.empty": "name cannot be an empty ",
  }),
  valueToEvaluate: Joi.string().regex(arithmeticExpressionPattern).required().messages({
    "string.pattern.base": "only write arithmetic Expressions",
    "any.required": "arithmetic expression is required ",
    "string.empty": "arithmetic expression cannot be an empty ",
  }),
});

export { arithmeticOperationSchema };
