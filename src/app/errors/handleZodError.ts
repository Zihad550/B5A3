import { ZodError, ZodIssue } from "zod";
import { IGenericErrorResponse } from "../interfaces/error.interface";

const handleZodError = (err: ZodError): IGenericErrorResponse => {
  const statusCode = 400;

  return {
    statusCode,
    message: "Zod Validation Error",
  };
};
export default handleZodError;
