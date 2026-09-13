const Job = require('../models/Job');
const Profile = require('../models/Profile');
const { sendResponse } = require('../utils/response');

const getJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const skip = (page - 1) * limit;

    const query = {
      keyword: req.query.keyword || req.query.q,
      location: req.query.location,
      country: req.query.country,
      workMode: req.query.workMode,
      employmentType: req.query.employmentType || req.query.type,
      experienceLevel: req.query.experienceLevel || req.query.level,
      status: 'active'
    };

    const total = await Job.countDocuments(query);
    const jobs = await Job.find(query, { skip, limit });

    res.status(200).json({
      success: true,
      message: 'Jobs fetched successfully',
      data: jobs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit) || 1
      }
    });
  } catch (err) {
    sendResponse(res, 500, false, err.message || 'Error fetching jobs');
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return sendResponse(res, 404, false, 'Job opportunity not found');
    sendResponse(res, 200, true, 'Job details retrieved', job);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const createJob = async (req, res) => {
  try {
    const recruiterId = req.user?.id || req.user?._id;
    const newJob = await Job.create({
      ...req.body,
      recruiterId,
      postedAt: new Date().toISOString()
    });
    sendResponse(res, 201, true, 'Job published successfully', newJob);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const saveJob = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const { jobId } = req.params;
    const profile = await Profile.findByUserId(userId) || { userId, savedJobs: [] };
    const savedJobs = Array.isArray(profile.savedJobs) ? profile.savedJobs : [];

    if (!savedJobs.includes(jobId)) {
      savedJobs.push(jobId);
    }
    await Profile.update(userId, { savedJobs });
    sendResponse(res, 200, true, 'Job saved successfully', { savedJobs });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const unsaveJob = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const { jobId } = req.params;
    const profile = await Profile.findByUserId(userId);
    let savedJobs = profile && Array.isArray(profile.savedJobs) ? profile.savedJobs : [];
    savedJobs = savedJobs.filter(id => id !== jobId);
    await Profile.update(userId, { savedJobs });
    sendResponse(res, 200, true, 'Job removed from saved jobs', { savedJobs });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const getSavedJobs = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const profile = await Profile.findByUserId(userId);
    const savedIds = profile && Array.isArray(profile.savedJobs) ? profile.savedJobs : [];
    const allJobs = await Job.find({ status: 'active' });
    const savedJobs = allJobs.filter(j => savedIds.includes(j.id || j._id));
    sendResponse(res, 200, true, 'Saved jobs retrieved', savedJobs);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = { getJobs, getJobById, createJob, saveJob, unsaveJob, getSavedJobs };

