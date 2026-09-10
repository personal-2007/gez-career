const Notification = require('../models/Notification');
const { sendResponse } = require('../utils/response');

const getNotifications = async (req, res) => {
  const userId = req.user ? req.user.id : 'usr_candidate_1';
  const notifications = await Notification.findByUserId(userId);
  sendResponse(res, 200, true, 'Notifications retrieved', notifications);
};

module.exports = { getNotifications };
