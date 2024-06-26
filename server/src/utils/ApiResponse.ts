interface ApiResponse<T> {
    statusCode: number;
    data: T;
    message: string;
    success: boolean;
  }
  
  class ApiResponse<T> {
    constructor(statusCode: number, data: T, message: string = "Success") {
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;
      this.success = statusCode < 400;
    }
  }
  
  export { ApiResponse };