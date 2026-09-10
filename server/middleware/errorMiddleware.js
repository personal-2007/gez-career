const logger = require('../utils/logger');
const { sendResponse } = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message, err.stack);
  const statusCode = err.statusCode || 500;
  sendResponse(res, statusCode, false, err.message || 'Internal Server Error');
};

const notFound = (req, res) => {
  sendResponse(res, 404, false, `Resource not found - ${req.originalUrl}`);
};

module.exports = { errorHandler, notFound };
