const Application = require('../models/Application');
const Job = require('../models/Job');
const { sendResponse } = require('../utils/response');

const getMyApplications = async (req, res) => {
  const userId = req.user ? req.user.id : 'usr_candidate_1';
  const apps = await Application.findByUserId(userId);
  sendResponse(res, 200, true, 'Applications retrieved', apps);
};

const applyForJob = async (req, res) => {
  const userId = req.user ? req.user.id : 'usr_candidate_1';
  const { jobId, coverLetter, resumeUrl } = req.body;
  const job = await Job.findById(jobId);

  const newApp = await Application.create({
    userId,
    jobId,
    job: job || { title: 'Target Role', company: { name: 'Target Company' } },
    coverLetter,
    resumeUrl
  });

  sendResponse(res, 201, true, 'Application submitted successfully', newApp);
};

module.exports = { getMyApplications, applyForJob };
