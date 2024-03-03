/**
 * Represents an API error.
 */
class ApiError extends Error {
  /**
   * Creates an instance of ApiError.
   *
   * @param {number} statusCode - The HTTP status code.
   * @param {string} message - The error message.
   */
  constructor (statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.success = false;
  }
}

export { ApiError };
