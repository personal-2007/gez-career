const { verifyToken } = require('../utils/jwt');
const { sendResponse } = require('../utils/response');

const protect = (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    // For convenience in demo mode, inject standard candidate user if no token provided
    req.user = { id: 'usr_candidate_1', email: 'alex.developer@gezcareer.com', role: 'candidate', name: 'Alex Rivera' };
    return next();
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return sendResponse(res, 401, false, 'Invalid or expired authorization token');
  }

  req.user = decoded;
  next();
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return sendResponse(res, 403, false, 'You do not have permission to perform this action');
    }
    next();
  };
};

module.exports = { protect, restrictTo };
