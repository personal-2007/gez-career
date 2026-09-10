const Company = require('../models/Company');
const { sendResponse } = require('../utils/response');

const getCompanies = async (req, res) => {
  const companies = await Company.find();
  sendResponse(res, 200, true, 'Companies retrieved', companies);
};

const getCompanyById = async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return sendResponse(res, 404, false, 'Company not found');
  sendResponse(res, 200, true, 'Company details retrieved', company);
};

module.exports = { getCompanies, getCompanyById };
