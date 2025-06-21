import mongoose from "mongoose";
import { IGenericErrorResponse } from "../interfaces/error.interface";

const handleCastError = (
  err: mongoose.Error.CastError,
): IGenericErrorResponse => {
  const statusCode = 400;
  return {
    statusCode,
    message: "Invalid ID",
  };
};

export default handleCastError;
