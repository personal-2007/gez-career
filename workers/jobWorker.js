const logger = require('../server/utils/logger');

const runJobWorker = async () => {
  logger.info('[JOB WORKER] Scanning external feeds and matching new job postings...');
};

module.exports = { runJobWorker };
