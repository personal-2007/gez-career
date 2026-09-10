const Review = require('../models/Review');
const { sendResponse } = require('../utils/response');

const getCompanyReviews = async (req, res) => {
  const reviews = await Review.findByCompanyId(req.params.companyId);
  sendResponse(res, 200, true, 'Reviews retrieved', reviews);
};

module.exports = { getCompanyReviews };
