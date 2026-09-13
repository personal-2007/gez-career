const express = require('express');
const router = express.Router();
const {
  chatWithCareerAssistant,
  analyzeResume,
  calculateATSScore,
  generateCoverLetter,
  evaluateInterviewAnswer,
  getSkillGapRoadmap
} = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.post('/chat', protect, chatWithCareerAssistant);
router.post('/analyze-resume', protect, analyzeResume);
router.post('/ats-score', protect, calculateATSScore);
router.post('/cover-letter', protect, generateCoverLetter);
router.post('/interview-feedback', protect, evaluateInterviewAnswer);
router.post('/skill-gap', protect, getSkillGapRoadmap);

module.exports = router;
