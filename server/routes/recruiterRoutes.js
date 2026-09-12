const express = require('express');
const router = express.Router();
const { getRecruiterDashboard, getApplicantsForJob } = require('../controllers/recruiterController');
const { protect } = require('../middleware/authMiddleware');
const { requireRole } = require('../middleware/roleMiddleware');

router.get('/dashboard', protect, requireRole('recruiter', 'admin'), getRecruiterDashboard);
router.get('/jobs/:jobId/applicants', protect, requireRole('recruiter', 'admin'), getApplicantsForJob);

module.exports = router;
