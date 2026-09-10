const { dbInstance } = require('../config/database');

class Resume {
  static async findByUserId(userId) {
    return dbInstance.resumes.filter(r => r.userId === userId);
  }

  static async create(data) {
    const resume = {
      id: `res_${Date.now()}`,
      createdAt: new Date().toISOString(),
      atsScore: 85,
      ...data
    };
    dbInstance.resumes.push(resume);
    return resume;
  }
}

module.exports = Resume;
