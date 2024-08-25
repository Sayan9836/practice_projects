class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong") {
    super(message);
    this.statusCode = statusCode;
    this.status = "error";
    this.data = null;
    this.message = message;
  }
}

export { ApiError };
