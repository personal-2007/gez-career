const logger = require('./logger');

const sendEmail = async ({ to, subject, html }) => {
  logger.info(`[Email Service] Simulating dispatch to: ${to} | Subject: "${subject}"`);
  return { success: true, messageId: `msg_${Date.now()}` };
};

module.exports = { sendEmail };
