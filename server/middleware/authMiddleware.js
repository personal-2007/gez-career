const { verifyToken } = require('../utils/jwt');
const { sendResponse } = require('../utils/response');

const normalizeRole = (role) => {
  if (!role) return 'user';
  if (role === 'candidate') return 'user';
  return role;
};

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return sendResponse(res, 401, false, 'Authentication required. Please log in again.');
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return sendResponse(res, 401, false, 'Invalid or expired authorization token');
  }

  req.user = {
    ...decoded,
    role: normalizeRole(decoded.role)
  };

  next();
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    const currentRole = normalizeRole(req.user?.role);
    if (!req.user || !roles.includes(currentRole)) {
      return sendResponse(res, 403, false, 'You do not have permission to perform this action');
    }
    next();
  };
};

module.exports = { protect, restrictTo };
