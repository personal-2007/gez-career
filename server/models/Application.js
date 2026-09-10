const { dbInstance } = require('../config/database');

class Application {
  static async findByUserId(userId) {
    return dbInstance.applications.filter(a => a.userId === userId);
  }

  static async findByJobId(jobId) {
    return dbInstance.applications.filter(a => a.jobId === jobId);
  }

  static async create(data) {
    const app = {
      id: `app_${Date.now()}`,
      status: 'applied',
      appliedAt: new Date().toISOString(),
      timeline: [
        { status: 'applied', label: 'Application Submitted', timestamp: new Date().toISOString() }
      ],
      ...data
    };
    dbInstance.applications.unshift(app);
    return app;
  }
}

module.exports = Application;
