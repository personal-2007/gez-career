const { dbInstance } = require('../config/database');

class Review {
  static async findByCompanyId(companyId) {
    return dbInstance.reviews.filter(r => r.companyId === companyId);
  }
}

module.exports = Review;
