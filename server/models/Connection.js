const { dbInstance, mongoose } = require('../config/database');

const connectionSchema = new mongoose.Schema({
  requesterId: { type: String, required: true, index: true },
  recipientId: { type: String, required: true, index: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending', index: true }
}, { timestamps: true });

connectionSchema.index({ requesterId: 1, recipientId: 1 }, { unique: true });

let MongooseConnection;
try {
  MongooseConnection = mongoose.model('Connection', connectionSchema);
} catch (e) {
  MongooseConnection = mongoose.model('Connection');
}

class Connection {
  static async find(query = {}) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseConnection.find(query);
    }
    return dbInstance.connections.filter(c => {
      return Object.keys(query).every(key => c[key] === query[key]);
    });
  }

  static async findUserConnections(userId) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseConnection.find({
        $or: [{ requesterId: userId }, { recipientId: userId }],
        status: 'accepted'
      });
    }
    return dbInstance.connections.filter(c => (c.requesterId === userId || c.recipientId === userId) && c.status === 'accepted');
  }

  static async create(data) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseConnection.create(data);
    }
    const conn = {
      id: data.id || `conn_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      _id: data.id || `conn_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
      ...data
    };
    dbInstance.connections.push(conn);
    return conn;
  }

  static async updateStatus(id, status) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseConnection.findByIdAndUpdate(id, { status }, { new: true });
    }
    const conn = dbInstance.connections.find(c => c.id === id || c._id === id);
    if (conn) {
      conn.status = status;
      return conn;
    }
    return null;
  }
}

Connection.schema = connectionSchema;
Connection.MongooseModel = MongooseConnection;

module.exports = Connection;
