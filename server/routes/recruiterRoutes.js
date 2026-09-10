const express = require('express');
const router = express.Router();
const { getRecruiterDashboard, getApplicantsForJob } = require('../controllers/recruiterController');

router.get('/dashboard', getRecruiterDashboard);
router.get('/jobs/:jobId/applicants', getApplicantsForJob);

module.exports = router;
