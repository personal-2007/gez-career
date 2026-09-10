const logger = require('../server/utils/logger');

const processEmailQueue = async () => {
  logger.info('[EMAIL WORKER] Processing queued system notifications and application receipts...');
};

module.exports = { processEmailQueue };
