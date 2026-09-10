const Message = require('../models/Message');
const { sendResponse } = require('../utils/response');

const getMessages = async (req, res) => {
  const userId = req.user ? req.user.id : 'usr_candidate_1';
  const messages = await Message.findByUserId(userId);
  sendResponse(res, 200, true, 'Messages retrieved', messages);
};

const sendMessage = async (req, res) => {
  const senderId = req.user ? req.user.id : 'usr_candidate_1';
  const { receiverId, text } = req.body;
  const msg = await Message.create({ senderId, receiverId, text });
  sendResponse(res, 201, true, 'Message sent', msg);
};

module.exports = { getMessages, sendMessage };
