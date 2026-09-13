const { dbInstance, mongoose } = require('../config/database');

const postSchema = new mongoose.Schema({
  authorId: { type: String, required: true, index: true },
  authorName: { type: String, required: true },
  authorHeadline: { type: String, default: '' },
  authorAvatar: { type: String, default: '' },
  content: { type: String, required: true },
  type: { type: String, enum: ['career_update', 'project', 'achievement', 'job_opportunity', 'learning'], default: 'career_update', index: true },
  likes: [{ type: String }],
  comments: [{
    userId: String,
    userName: String,
    userAvatar: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now, index: true }
}, { timestamps: true });

let MongoosePost;
try {
  MongoosePost = mongoose.model('Post', postSchema);
} catch (e) {
  MongoosePost = mongoose.model('Post');
}

class Post {
  static async find(query = {}) {
    if (mongoose.connection.readyState === 1) {
      return await MongoosePost.find(query).sort({ createdAt: -1 });
    }
    return dbInstance.posts;
  }

  static async findById(id) {
    if (mongoose.connection.readyState === 1) {
      return await MongoosePost.findById(id);
    }
    return dbInstance.posts.find(p => p.id === id || p._id === id);
  }

  static async create(data) {
    if (mongoose.connection.readyState === 1) {
      return await MongoosePost.create(data);
    }
    const post = {
      id: data.id || `post_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      _id: data.id || `post_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      likes: [],
      comments: [],
      createdAt: new Date().toISOString(),
      ...data
    };
    dbInstance.posts.unshift(post);
    return post;
  }

  static async findByIdAndUpdate(id, updateData, options = { new: true }) {
    if (mongoose.connection.readyState === 1) {
      return await MongoosePost.findByIdAndUpdate(id, updateData, options);
    }
    const idx = dbInstance.posts.findIndex(p => p.id === id || p._id === id);
    if (idx !== -1) {
      dbInstance.posts[idx] = { ...dbInstance.posts[idx], ...updateData };
      return dbInstance.posts[idx];
    }
    return null;
  }

  static async findByIdAndDelete(id) {
    if (mongoose.connection.readyState === 1) {
      return await MongoosePost.findByIdAndDelete(id);
    }
    const idx = dbInstance.posts.findIndex(p => p.id === id || p._id === id);
    if (idx !== -1) {
      const deleted = dbInstance.posts[idx];
      dbInstance.posts.splice(idx, 1);
      return deleted;
    }
    return null;
  }
}

Post.schema = postSchema;
Post.MongooseModel = MongoosePost;

module.exports = Post;
