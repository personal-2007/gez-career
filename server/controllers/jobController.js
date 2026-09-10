const Job = require('../models/Job');
const { sendResponse } = require('../utils/response');

const getJobs = async (req, res) => {
  const jobs = await Job.find(req.query);
  sendResponse(res, 200, true, 'Jobs retrieved', jobs);
};

const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return sendResponse(res, 404, false, 'Job not found');
  sendResponse(res, 200, true, 'Job details retrieved', job);
};

const createJob = async (req, res) => {
  const newJob = await Job.create(req.body);
  sendResponse(res, 201, true, 'Job created successfully', newJob);
};

module.exports = { getJobs, getJobById, createJob };
