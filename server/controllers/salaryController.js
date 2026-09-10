const Salary = require('../models/Salary');
const { sendResponse } = require('../utils/response');

const getSalaries = async (req, res) => {
  const salaries = await Salary.find();
  sendResponse(res, 200, true, 'Salaries retrieved', salaries);
};

module.exports = { getSalaries };
