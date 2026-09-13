const { dbInstance, mongoose } = require('../config/database');

const messageSchema = new mongoose.Schema({
  conversationId: { type: String, required: true, index: true },
  senderId: { type: String, required: true, index: true },
  receiverId: { type: String, required: true, index: true },
  senderName: { type: String, default: '' },
  senderAvatar: { type: String, default: '' },
  content: { type: String, required: true },
  read: { type: Boolean, default: false, index: true },
  createdAt: { type: Date, default: Date.now, index: true }
}, { timestamps: true });

messageSchema.index({ senderId: 1, receiverId: 1 });

let MongooseMessage;
try {
  MongooseMessage = mongoose.model('Message', messageSchema);
} catch (e) {
  MongooseMessage = mongoose.model('Message');
}

class Message {
  static async findByUserId(userId) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseMessage.find({
        $or: [{ senderId: userId }, { receiverId: userId }]
      }).sort({ createdAt: 1 });
    }
    return dbInstance.messages.filter(m => m.senderId === userId || m.receiverId === userId);
  }

  static async findByConversation(conversationId) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseMessage.find({ conversationId }).sort({ createdAt: 1 });
    }
    return dbInstance.messages.filter(m => m.conversationId === conversationId);
  }

  static async create(data) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseMessage.create(data);
    }
    const msg = {
      id: data.id || `msg_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      _id: data.id || `msg_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      read: false,
      createdAt: new Date().toISOString(),
      ...data
    };
    dbInstance.messages.push(msg);
    return msg;
  }

  static async markAsRead(conversationId, userId) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseMessage.updateMany(
        { conversationId, receiverId: userId, read: false },
        { $set: { read: true } }
      );
    }
    dbInstance.messages.forEach(m => {
      if (m.conversationId === conversationId && m.receiverId === userId) {
        m.read = true;
      }
    });
    return true;
  }
}

Message.schema = messageSchema;
Message.MongooseModel = MongooseMessage;

module.exports = Message;

