class ApiError {
  constructor(statusCode = "", message = "something went wrong") {
    this.status = "error";
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
  }
}

export { ApiError };
