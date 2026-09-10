const { dbInstance } = require('../config/database');

class Company {
  static async find() {
    return dbInstance.companies;
  }

  static async findById(id) {
    return dbInstance.companies.find(c => c.id === id || c._id === id);
  }
}

module.exports = Company;
