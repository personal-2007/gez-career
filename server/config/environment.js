require('dotenv').config();

require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'gez_career_fallback_secret_key_2026',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/gez_career',
  aiServiceKey: process.env.AI_SERVICE_KEY || 'mock-ai-key',
  adminEmail: process.env.ADMIN_EMAIL || 'admin@gezcareer.com',
  adminPassword: process.env.ADMIN_PASSWORD || 'admin123'
};
