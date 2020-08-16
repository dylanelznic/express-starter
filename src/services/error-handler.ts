import { Response } from 'express';

/**
 * Error object containing a status code
 *
 * @prop message - The error message
 * @prop statusCode - The response's status code
 */
export class ResponseError extends Error {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

/** Return an error response with the appropriate data */
export const handleError = (err: ResponseError, res: Response): void => {
  const { message, statusCode } = err;
  res.status(statusCode).json({
    status: 'error',
    message,
    statusCode,
  });
};
