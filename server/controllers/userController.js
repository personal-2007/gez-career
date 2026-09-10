const User = require('../models/User');
const { sendResponse } = require('../utils/response');

const getUsers = async (req, res) => {
  const users = await User.find();
  sendResponse(res, 200, true, 'Users retrieved successfully', users);
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return sendResponse(res, 404, false, 'User not found');
  sendResponse(res, 200, true, 'User retrieved', user);
};

module.exports = { getUsers, getUserById };
