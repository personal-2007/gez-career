const { dbInstance } = require('../config/database');

class Interview {
  static async findByUserId(userId) {
    return dbInstance.interviews.filter(i => i.candidateId === userId || i.recruiterId === userId);
  }
}

module.exports = Interview;
