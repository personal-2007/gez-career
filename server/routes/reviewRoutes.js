const express = require('express');
const router = express.Router();
const { getCompanyReviews } = require('../controllers/reviewController');

router.get('/company/:companyId', getCompanyReviews);

module.exports = router;
