class ApiResponse {
  constructor(statusCode, data, message) {
    this.status = "success";
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
}

export { ApiResponse };
