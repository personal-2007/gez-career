const { dbInstance, mongoose } = require('../config/database');

const reviewSchema = new mongoose.Schema({
  companyId: { type: String, required: true, index: true },
  userId: { type: String, required: true, index: true },
  userName: { type: String, default: 'Anonymous User' },
  userRole: { type: String, default: 'Employee' },
  rating: { type: Number, required: true, min: 1, max: 5 },
  title: { type: String, required: true },
  pros: { type: String, required: true },
  cons: { type: String, required: true },
  interviewExperience: { type: String, default: '' },
  status: { type: String, enum: ['approved', 'pending', 'flagged'], default: 'approved', index: true }
}, { timestamps: true });

let MongooseReview;
try {
  MongooseReview = mongoose.model('Review', reviewSchema);
} catch (e) {
  MongooseReview = mongoose.model('Review');
}

class Review {
  static async find(query = {}) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseReview.find(query).sort({ createdAt: -1 });
    }
    return dbInstance.reviews.filter(r => {
      return Object.keys(query).every(key => r[key] === query[key]);
    });
  }

  static async findByCompanyId(companyId) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseReview.find({ companyId, status: 'approved' }).sort({ createdAt: -1 });
    }
    return dbInstance.reviews.filter(r => r.companyId === companyId);
  }

  static async create(data) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseReview.create(data);
    }
    const rev = {
      id: data.id || `rev_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      _id: data.id || `rev_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      status: 'approved',
      createdAt: new Date().toISOString(),
      ...data
    };
    dbInstance.reviews.unshift(rev);
    return rev;
  }

  static async findByIdAndDelete(id) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseReview.findByIdAndDelete(id);
    }
    const idx = dbInstance.reviews.findIndex(r => r.id === id || r._id === id);
    if (idx !== -1) {
      const deleted = dbInstance.reviews[idx];
      dbInstance.reviews.splice(idx, 1);
      return deleted;
    }
    return null;
  }
}

Review.schema = reviewSchema;
Review.MongooseModel = MongooseReview;

module.exports = Review;

