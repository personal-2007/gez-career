const { sendResponse } = require('../utils/response');

const validate = (schema) => (req, res, next) => {
  if (schema && schema.body) {
    for (const field of schema.body) {
      if (!req.body[field]) {
        return sendResponse(res, 400, false, `Missing required field: ${field}`);
      }
    }
  }
  next();
};

module.exports = validate;
