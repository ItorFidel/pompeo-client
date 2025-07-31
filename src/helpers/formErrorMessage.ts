import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { serverErrorProps } from "../services/types";

const formErrorMessage = (
  error: FetchBaseQueryError | SerializedError | undefined
) => {
  let errorMessage: serverErrorProps;

  if (error && "status" in error) {
    errorMessage =
      "error" in error
        ? { type: "networkError", message: "Failed to connect." }
        : (error.data as serverErrorProps);
  } else {
    errorMessage = {
      type: "networkError",
      message: error?.message?.replace(/"/g, "") || "Failed to connect.",
    };
  }

  return errorMessage;
};
export default formErrorMessage;
