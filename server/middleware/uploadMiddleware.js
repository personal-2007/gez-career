const path = require('path');

const uploadMiddleware = (req, res, next) => {
  // Handle mock file upload data
  if (!req.file && req.body.file) {
    req.uploadedFile = {
      filename: `resume_${Date.now()}.pdf`,
      path: path.join(__dirname, '../uploads/resumes', `resume_${Date.now()}.pdf`),
      size: 1024 * 350
    };
  }
  next();
};

module.exports = uploadMiddleware;
