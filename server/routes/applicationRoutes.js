const express = require('express');
const router = express.Router();
const { getMyApplications, getApplicationById, applyForJob, updateApplicationStatus } = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getMyApplications);
router.get('/me', protect, getMyApplications);
router.get('/:id', protect, getApplicationById);
router.post('/apply', protect, applyForJob);
router.post('/', protect, applyForJob);
router.put('/:id/status', protect, updateApplicationStatus);

module.exports = router;

