const { dbInstance } = require('../config/database');

class Profile {
  static async findByUserId(userId) {
    return dbInstance.profiles.find(p => p.userId === userId);
  }

  static async update(userId, updates) {
    let profile = dbInstance.profiles.find(p => p.userId === userId);
    if (profile) {
      Object.assign(profile, updates);
    } else {
      profile = { userId, ...updates };
      dbInstance.profiles.push(profile);
    }
    return profile;
  }
}

module.exports = Profile;
