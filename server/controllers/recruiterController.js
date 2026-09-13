const Application = require('../models/Application');
const Job = require('../models/Job');
const User = require('../models/User');
const Profile = require('../models/Profile');
const { sendResponse } = require('../utils/response');

const getRecruiterDashboard = async (req, res) => {
  try {
    const recruiterId = req.user?.id || req.user?._id;
    const recruiterJobs = await Job.find({ recruiterId });
    const allJobs = recruiterJobs.length > 0 ? recruiterJobs : await Job.find();

    const allApplications = await Application.find();
    const shortlistedCount = allApplications.filter(a => a.status === 'shortlisted').length;
    const interviewsCount = allApplications.filter(a => a.status === 'interview').length;
    const offersCount = allApplications.filter(a => a.status === 'offer').length;

    sendResponse(res, 200, true, 'Recruiter analytics retrieved', {
      activeJobsCount: allJobs.filter(j => j.status === 'active').length,
      totalApplicantsCount: allApplications.length,
      shortlistedCount,
      interviewsScheduled: interviewsCount,
      offersExtended: offersCount,
      recentJobs: allJobs.slice(0, 10)
    });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const getApplicantsForJob = async (req, res) => {
  try {
    const apps = await Application.findByJobId(req.params.jobId);
    sendResponse(res, 200, true, 'Job applicants retrieved successfully', apps);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const searchCandidates = async (req, res) => {
  try {
    const keyword = (req.query.keyword || req.query.q || '').toLowerCase();
    const users = await User.find({ role: 'candidate' });
    const profiles = await Profile.find();

    let candidates = users.map(u => {
      const prof = profiles.find(p => p.userId === u.id || p.userId === u._id) || {};
      return {
        id: u.id || u._id,
        name: u.name,
        email: u.email,
        avatar: u.avatar,
        headline: prof.headline || 'Software Developer',
        location: prof.location || 'Global',
        skills: prof.skills || ['JavaScript', 'React', 'Node.js'],
        completionScore: prof.completionScore || 80,
        careerStatus: prof.careerStatus || 'fresher'
      };
    });

    if (keyword) {
      candidates = candidates.filter(c =>
        c.name.toLowerCase().includes(keyword) ||
        c.headline.toLowerCase().includes(keyword) ||
        c.skills.some(s => s.toLowerCase().includes(keyword))
      );
    }

    sendResponse(res, 200, true, 'Candidates search results', candidates);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = { getRecruiterDashboard, getApplicantsForJob, searchCandidates };

