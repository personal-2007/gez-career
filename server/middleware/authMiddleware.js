const { verifyToken } = require('../utils/jwt');
const { sendResponse } = require('../utils/response');

const normalizeRole = (role) => {
  if (!role) return 'candidate';
  if (role === 'user') return 'candidate';
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
    role: normalizeRole(decoded.role),
    originalRole: decoded.role
  };

  next();
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return sendResponse(res, 401, false, 'Authentication required.');
    }
    const currentRole = req.user.role;
    const rawRole = req.user.originalRole;
    
    // Check if role matches any allowed role (supporting candidate & user interchangeably)
    const isAllowed = roles.some(r => r === currentRole || r === rawRole || (r === 'user' && currentRole === 'candidate') || (r === 'candidate' && currentRole === 'user'));

    if (!isAllowed) {
      return sendResponse(res, 403, false, 'Access denied. You do not have permission to perform this action.');
    }
    next();
  };
};

module.exports = { protect, restrictTo };

