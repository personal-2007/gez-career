const Application = require('../models/Application');
const Job = require('../models/Job');
const Notification = require('../models/Notification');
const { sendResponse } = require('../utils/response');

const getMyApplications = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const apps = await Application.findByUserId(userId);
    sendResponse(res, 200, true, 'Applications retrieved successfully', apps);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const getApplicationById = async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);
    if (!app) return sendResponse(res, 404, false, 'Application record not found');
    sendResponse(res, 200, true, 'Application details retrieved', app);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const applyForJob = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const { jobId, coverLetter, resumeUrl, resumeName, answers } = req.body;

    if (!jobId) {
      return sendResponse(res, 400, false, 'Job ID is required to submit application');
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return sendResponse(res, 404, false, 'Target job posting is no longer active');
    }

    // Check if user already applied
    const existingApps = await Application.findByUserId(userId);
    const alreadyApplied = existingApps.find(a => (a.jobId === jobId || a.job?._id === jobId || a.job?.id === jobId) && a.status !== 'withdrawn');
    if (alreadyApplied) {
      return sendResponse(res, 400, false, 'You have already submitted an active application for this job posting');
    }

    const newApp = await Application.create({
      userId,
      jobId: job.id || job._id,
      recruiterId: job.recruiterId || 'recruiter_1',
      job: {
        id: job.id || job._id,
        title: job.title,
        company: job.company,
        location: job.location,
        workMode: job.workMode,
        employmentType: job.employmentType,
        salaryRange: job.salaryRange
      },
      coverLetter: coverLetter || '',
      resume: {
        url: resumeUrl || 'default_resume.pdf',
        name: resumeName || 'Primary_Resume.pdf'
      },
      answers: answers || [],
      status: 'applied',
      appliedAt: new Date().toISOString(),
      matchScore: job.matchScore || Math.floor(Math.random() * 15) + 84,
      timeline: [
        { status: 'applied', label: 'Application Submitted', timestamp: new Date().toISOString() }
      ]
    });

    // Increment applicant count
    if (job.applicantCount !== undefined) {
      await Job.findByIdAndUpdate(job.id || job._id, { applicantCount: (job.applicantCount || 0) + 1 });
    }

    // Send notification
    await Notification.create({
      userId,
      title: 'Application Submitted',
      message: `Your application for ${job.title} at ${job.company?.name || 'Company'} was received.`,
      link: '/applications/me'
    });

    sendResponse(res, 201, true, 'Application submitted successfully', newApp);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, note } = req.body;

    const validStatuses = ['applied', 'reviewing', 'shortlisted', 'interview', 'offer', 'rejected', 'withdrawn'];
    if (!validStatuses.includes(status)) {
      return sendResponse(res, 400, false, 'Invalid status transition');
    }

    const updated = await Application.findByIdAndUpdate(id, { status });
    if (!updated) return sendResponse(res, 404, false, 'Application record not found');

    // Send notification to applicant
    await Notification.create({
      userId: updated.userId,
      title: 'Application Status Update',
      message: `Your application status for ${updated.job?.title || 'Job'} was updated to: ${status.replace('_', ' ')}`,
      link: '/applications/me'
    });

    sendResponse(res, 200, true, 'Application status updated successfully', updated);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = { getMyApplications, getApplicationById, applyForJob, updateApplicationStatus };

