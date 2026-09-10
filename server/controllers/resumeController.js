const Resume = require('../models/Resume');
const resumeAgent = require('../../ai/agents/resumeAgent');
const { sendResponse } = require('../utils/response');

const getResumes = async (req, res) => {
  const userId = req.user ? req.user.id : 'usr_candidate_1';
  const resumes = await Resume.findByUserId(userId);
  sendResponse(res, 200, true, 'Resumes retrieved', resumes);
};

const analyzeResume = async (req, res) => {
  const { resumeText, targetJob } = req.body;
  const analysis = await resumeAgent.analyze(resumeText, targetJob);
  sendResponse(res, 200, true, 'Resume analysis complete', analysis);
};

module.exports = { getResumes, analyzeResume };
