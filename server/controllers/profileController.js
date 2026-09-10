const Profile = require('../models/Profile');
const { sendResponse } = require('../utils/response');

const getProfile = async (req, res) => {
  const userId = req.user ? req.user.id : 'usr_candidate_1';
  const profile = await Profile.findByUserId(userId);
  sendResponse(res, 200, true, 'Profile retrieved', profile || {});
};

const updateProfile = async (req, res) => {
  const userId = req.user ? req.user.id : 'usr_candidate_1';
  const updated = await Profile.update(userId, req.body);
  sendResponse(res, 200, true, 'Profile updated successfully', updated);
};

module.exports = { getProfile, updateProfile };
