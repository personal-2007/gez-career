const rateLimitMiddleware = (req, res, next) => {
  // Simple rate limiter middleware pass-through
  next();
};

module.exports = rateLimitMiddleware;
