const express = require('express');
const router = express.Router();
const { getResumes, analyzeResume } = require('../controllers/resumeController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getResumes);
router.post('/analyze', protect, analyzeResume);

module.exports = router;
