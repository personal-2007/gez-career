const { dbInstance } = require('../config/database');

class Salary {
  static async find() {
    return dbInstance.salaries;
  }
}

module.exports = Salary;
