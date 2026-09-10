const express = require('express');
const router = express.Router();
const { getMyApplications, applyForJob } = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getMyApplications);
router.post('/apply', protect, applyForJob);

module.exports = router;
