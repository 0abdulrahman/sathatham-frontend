export default class AppError extends Error {
  public errors?: ValidationError[];
  public statusCode?: number;

  constructor(message: string, errors?: ValidationError[], statusCode?: number) {
    super(message);

    if (errors) this.errors = errors;
    if (statusCode) this.statusCode = statusCode;

    // Exclude the error from the error stack trance and preserve the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}
