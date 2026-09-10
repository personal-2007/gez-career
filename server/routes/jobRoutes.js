const express = require('express');
const router = express.Router();
const { getJobs, getJobById, createJob } = require('../controllers/jobController');

router.get('/', getJobs);
router.get('/:id', getJobById);
router.post('/', createJob);

module.exports = router;
