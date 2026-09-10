const { dbInstance } = require('../config/database');

class Message {
  static async findByUserId(userId) {
    return dbInstance.messages.filter(m => m.senderId === userId || m.receiverId === userId);
  }

  static async create(data) {
    const msg = {
      id: `msg_${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...data
    };
    dbInstance.messages.push(msg);
    return msg;
  }
}

module.exports = Message;
