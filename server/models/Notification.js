const { dbInstance, mongoose } = require('../config/database');

const notificationSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, default: 'info' },
  link: { type: String, default: '' },
  read: { type: Boolean, default: false, index: true },
  createdAt: { type: Date, default: Date.now, index: true }
}, { timestamps: true });

let MongooseNotification;
try {
  MongooseNotification = mongoose.model('Notification', notificationSchema);
} catch (e) {
  MongooseNotification = mongoose.model('Notification');
}

class Notification {
  static async findByUserId(userId) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseNotification.find({ userId }).sort({ createdAt: -1 });
    }
    return dbInstance.notifications.filter(n => n.userId === userId);
  }

  static async create(data) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseNotification.create(data);
    }
    const notif = {
      id: data.id || `notif_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      _id: data.id || `notif_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      read: false,
      createdAt: new Date().toISOString(),
      ...data
    };
    dbInstance.notifications.unshift(notif);
    return notif;
  }

  static async markAllAsRead(userId) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseNotification.updateMany({ userId, read: false }, { $set: { read: true } });
    }
    dbInstance.notifications.forEach(n => {
      if (n.userId === userId) n.read = true;
    });
    return true;
  }
}

Notification.schema = notificationSchema;
Notification.MongooseModel = MongooseNotification;

module.exports = Notification;

