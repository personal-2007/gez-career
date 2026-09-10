const { dbInstance } = require('../config/database');

class Country {
  static async find() {
    return dbInstance.countries;
  }
}

module.exports = Country;
