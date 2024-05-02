import { APIError } from "../types/APIError";

export const getError = (error: APIError) => {
  return error.response && error.response.data.messaage
    ? error.response.data.messaage
    : error.message;
};
