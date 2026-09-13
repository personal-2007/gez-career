const { dbInstance, mongoose } = require('../config/database');

const applicationSchema = new mongoose.Schema({
  jobId: { type: String, required: true, index: true },
  userId: { type: String, required: true, index: true },
  recruiterId: { type: String, index: true },
  job: mongoose.Schema.Types.Mixed,
  resume: {
    url: String,
    name: String
  },
  coverLetter: { type: String, default: '' },
  answers: [{
    question: String,
    answer: String
  }],
  status: {
    type: String,
    enum: ['applied', 'reviewing', 'shortlisted', 'interview', 'offer', 'rejected', 'withdrawn'],
    default: 'applied',
    index: true
  },
  matchScore: { type: Number, default: 85 },
  timeline: [{
    status: String,
    label: String,
    timestamp: { type: Date, default: Date.now }
  }],
  appliedAt: { type: Date, default: Date.now, index: true }
}, { timestamps: true });

applicationSchema.index({ userId: 1, jobId: 1 }, { unique: true });

let MongooseApplication;
try {
  MongooseApplication = mongoose.model('Application', applicationSchema);
} catch (e) {
  MongooseApplication = mongoose.model('Application');
}

class Application {
  static async find(query = {}) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseApplication.find(query).sort({ appliedAt: -1 });
    }
    return dbInstance.applications.filter(a => {
      return Object.keys(query).every(key => a[key] === query[key]);
    });
  }

  static async findById(id) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseApplication.findById(id);
    }
    return dbInstance.applications.find(a => a.id === id || a._id === id);
  }

  static async findByUserId(userId) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseApplication.find({ userId }).sort({ appliedAt: -1 });
    }
    return dbInstance.applications.filter(a => a.userId === userId);
  }

  static async findByJobId(jobId) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseApplication.find({ jobId }).sort({ appliedAt: -1 });
    }
    return dbInstance.applications.filter(a => a.jobId === jobId);
  }

  static async create(data) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseApplication.create(data);
    }
    const app = {
      id: data.id || `app_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      _id: data.id || `app_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      status: 'applied',
      appliedAt: new Date().toISOString(),
      timeline: [
        { status: 'applied', label: 'Application Submitted', timestamp: new Date().toISOString() }
      ],
      ...data
    };
    dbInstance.applications.unshift(app);
    return app;
  }

  static async findByIdAndUpdate(id, updateData, options = { new: true }) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseApplication.findByIdAndUpdate(id, updateData, options);
    }
    const idx = dbInstance.applications.findIndex(a => a.id === id || a._id === id);
    if (idx !== -1) {
      const current = dbInstance.applications[idx];
      const updatedTimeline = updateData.status && updateData.status !== current.status
        ? [...(current.timeline || []), { status: updateData.status, label: `Status updated to ${updateData.status}`, timestamp: new Date().toISOString() }]
        : current.timeline;

      dbInstance.applications[idx] = {
        ...current,
        ...updateData,
        timeline: updatedTimeline,
        updatedAt: new Date().toISOString()
      };
      return dbInstance.applications[idx];
    }
    return null;
  }

  static async countDocuments(query = {}) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseApplication.countDocuments(query);
    }
    return dbInstance.applications.filter(a => {
      return Object.keys(query).every(key => a[key] === query[key]);
    }).length;
  }
}

Application.schema = applicationSchema;
Application.MongooseModel = MongooseApplication;

module.exports = Application;

