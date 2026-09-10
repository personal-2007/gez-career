const express = require('express');
const router = express.Router();
const { chatWithCareerAssistant, evaluateInterviewAnswer, getSkillGapRoadmap } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.post('/chat', protect, chatWithCareerAssistant);
router.post('/interview-feedback', protect, evaluateInterviewAnswer);
router.post('/skill-gap', protect, getSkillGapRoadmap);

module.exports = router;
