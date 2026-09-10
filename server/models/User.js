const { dbInstance } = require('../config/database');

class User {
  static async find() {
    return dbInstance.users;
  }

  static async findById(id) {
    return dbInstance.users.find(u => u.id === id || u._id === id);
  }

  static async findOne(query) {
    return dbInstance.users.find(u => {
      return Object.keys(query).every(key => u[key] === query[key]);
    });
  }

  static async create(data) {
    const newUser = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      role: 'candidate',
      createdAt: new Date().toISOString(),
      ...data
    };
    dbInstance.users.push(newUser);
    return newUser;
  }
}

module.exports = User;
