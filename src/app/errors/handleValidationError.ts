import mongoose from "mongoose";
import { IGenericErrorResponse } from "../interfaces/error.interface";

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const statusCode = 400;
  return {
    statusCode,
    message: "Validation Error",
  };
};

export default handleValidationError;
