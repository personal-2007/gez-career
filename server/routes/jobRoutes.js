const express = require('express');
const router = express.Router();
const { getJobs, getJobById, createJob, saveJob, unsaveJob, getSavedJobs } = require('../controllers/jobController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.get('/', getJobs);
router.get('/saved/me', protect, getSavedJobs);
router.get('/:id', getJobById);
router.post('/', protect, restrictTo('recruiter', 'admin'), createJob);
router.post('/:jobId/save', protect, saveJob);
router.delete('/:jobId/save', protect, unsaveJob);

module.exports = router;

