const { dbInstance, mongoose } = require('../config/database');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['candidate', 'recruiter', 'admin'], default: 'candidate', index: true },
  avatar: { type: String, default: '' },
  googleId: { type: String, default: '' },
  isVerified: { type: Boolean, default: true },
  phone: { type: String, default: '' },
  country: { type: String, default: '' },
  city: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now, index: true }
}, { timestamps: true });

let MongooseUser;
try {
  MongooseUser = mongoose.model('User', userSchema);
} catch (e) {
  MongooseUser = mongoose.model('User');
}

class User {
  static async find(query = {}) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseUser.find(query).select('-password');
    }
    return dbInstance.users.filter(u => {
      return Object.keys(query).every(key => u[key] === query[key]);
    });
  }

  static async findById(id) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseUser.findById(id).select('-password');
    }
    return dbInstance.users.find(u => u.id === id || u._id === id);
  }

  static async findOne(query) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseUser.findOne(query);
    }
    return dbInstance.users.find(u => {
      return Object.keys(query).every(key => u[key] === query[key]);
    });
  }

  static async create(data) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseUser.create(data);
    }
    const newUser = {
      id: data.id || `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      _id: data.id || `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      role: 'candidate',
      isVerified: true,
      createdAt: new Date().toISOString(),
      ...data
    };
    dbInstance.users.push(newUser);
    return newUser;
  }

  static async findByIdAndUpdate(id, updateData, options = { new: true }) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseUser.findByIdAndUpdate(id, updateData, options).select('-password');
    }
    const idx = dbInstance.users.findIndex(u => u.id === id || u._id === id);
    if (idx !== -1) {
      dbInstance.users[idx] = { ...dbInstance.users[idx], ...updateData, updatedAt: new Date().toISOString() };
      return dbInstance.users[idx];
    }
    return null;
  }

  static async countDocuments(query = {}) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseUser.countDocuments(query);
    }
    return dbInstance.users.filter(u => {
      return Object.keys(query).every(key => u[key] === query[key]);
    }).length;
  }
}

User.schema = userSchema;
User.MongooseModel = MongooseUser;

module.exports = User;

