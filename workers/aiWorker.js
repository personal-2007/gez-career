const logger = require('../server/utils/logger');

const processAIJobs = async () => {
  logger.info('[AI WORKER] Extracting resume keywords and building vector embeddings...');
};

module.exports = { processAIJobs };
