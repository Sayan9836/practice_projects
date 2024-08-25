class ApiResponse {
  constructor(statusCode = "", data = [], message = "successfull") {
    this.status = "successfull";
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
}

export { ApiResponse };
