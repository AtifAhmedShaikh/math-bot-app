import mongoose from "mongoose";

const arithmeticOperationsSchema = new mongoose.Schema({
  // name of user who is perform the calculation with bot
  name: {
    type: String,
    required: true,
  },
  arithmeticExpression: {
    type: String,
    required: true,
  },
  evaluatedResult: {
    type: Number,
    required: true,
  },
});

export const ArithmeticOperationModel = mongoose.model("Operation", arithmeticOperationsSchema);
