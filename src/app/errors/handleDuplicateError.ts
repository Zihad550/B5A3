import { IGenericErrorResponse } from "../interfaces/error.interface";

const handleDuplicateError = (err: any): IGenericErrorResponse => {
  const match = err?.message.match(/"([^"]*)"/);
  const extractedMsg = match && match[1];

  const statusCode = 400;

  return {
    statusCode,
    message: "Duplicate entry found",
  };
};

export default handleDuplicateError;
