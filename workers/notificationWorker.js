const logger = require('../server/utils/logger');

const dispatchNotifications = async () => {
  logger.info('[NOTIFICATION WORKER] Dispatching push notifications & alerts...');
};

module.exports = { dispatchNotifications };
