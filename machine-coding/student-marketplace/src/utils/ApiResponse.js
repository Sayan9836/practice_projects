class ApiResponse {
  constructor(statusCode, data = [], message = "Something went wrong") {
    this.statusCode = statusCode;
    this.status = "success";
    this.data = data;
    this.message = message;
  }
}

export { ApiResponse };
