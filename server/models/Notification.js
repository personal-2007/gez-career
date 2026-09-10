const { dbInstance } = require('../config/database');

class Notification {
  static async findByUserId(userId) {
    return dbInstance.notifications.filter(n => n.userId === userId);
  }

  static async create(data) {
    const notif = {
      id: `notif_${Date.now()}`,
      read: false,
      createdAt: new Date().toISOString(),
      ...data
    };
    dbInstance.notifications.unshift(notif);
    return notif;
  }
}

module.exports = Notification;
