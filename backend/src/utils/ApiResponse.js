/**
 * A custom class to send consist response in every request
 * @class ApiResponse
 */
class ApiResponse {
  /**
   * @param {number} statusCode - HTTP status codes send in response
   * @param {object} data - the data to send in response
   * @param {string} message - the message to associated with the response.
   */
  constructor(statusCode, data, message) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }

  // method to send response
  send(res) {
    res.status(this.statusCode).json({
      message: this.message,
      statusCode: this.statusCode,
      data: this.data,
      success: this.success,
    });
  }
}

export { ApiResponse };
