const { sendResponse } = require('./../utils/response');

const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = (req.user?.role || 'user').toLowerCase();
    if (!allowedRoles.map((role) => role.toLowerCase()).includes(userRole)) {
      return sendResponse(res, 403, false, 'Access denied: insufficient role permissions');
    }
    return next();
  };
};

module.exports = { requireRole };
