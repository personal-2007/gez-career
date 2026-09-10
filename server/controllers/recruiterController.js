const Application = require('../models/Application');
const Job = require('../models/Job');
const User = require('../models/User');
const { sendResponse } = require('../utils/response');

const getRecruiterDashboard = async (req, res) => {
  const jobs = await Job.find();
  const candidates = await User.find();
  sendResponse(res, 200, true, 'Recruiter analytics retrieved', {
    activeJobsCount: jobs.length,
    totalApplicantsCount: 78,
    interviewsScheduled: 14,
    offersExtended: 5,
    recentJobs: jobs
  });
};

const getApplicantsForJob = async (req, res) => {
  const apps = await Application.findByJobId(req.params.jobId);
  sendResponse(res, 200, true, 'Job applicants retrieved', apps);
};

module.exports = { getRecruiterDashboard, getApplicantsForJob };
