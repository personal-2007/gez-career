const Profile = require('../models/Profile');
const User = require('../models/User');
const { sendResponse } = require('../utils/response');

const getProfile = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    let profile = await Profile.findByUserId(userId);
    const user = await User.findById(userId);

    if (!profile) {
      profile = await Profile.update(userId, {
        headline: 'Fresher Software Developer',
        careerStatus: 'fresher',
        skills: ['JavaScript', 'React', 'HTML5', 'CSS3'],
        education: []
      });
    }

    sendResponse(res, 200, true, 'Profile details fetched', {
      ...profile,
      user: user ? { id: user.id || user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar } : null
    });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const updated = await Profile.update(userId, req.body);

    if (req.body.name || req.body.avatar) {
      const userUpdates = {};
      if (req.body.name) userUpdates.name = req.body.name;
      if (req.body.avatar) userUpdates.avatar = req.body.avatar;
      await User.findByIdAndUpdate(userId, userUpdates);
    }

    sendResponse(res, 200, true, 'Profile updated successfully', updated);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = { getProfile, updateProfile };

