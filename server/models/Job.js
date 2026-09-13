const { dbInstance, mongoose } = require('../config/database');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  company: {
    name: { type: String, required: true, index: true },
    logo: String,
    industry: String,
    website: String
  },
  companyId: { type: String, index: true },
  recruiterId: { type: String, index: true },
  location: { type: String, required: true, index: true },
  country: { type: String, index: true },
  city: { type: String, index: true },
  workMode: { type: String, enum: ['remote', 'hybrid', 'onsite'], default: 'onsite', index: true },
  employmentType: { type: String, enum: ['full-time', 'part-time', 'internship', 'contract'], default: 'full-time', index: true },
  experienceLevel: { type: String, enum: ['fresher', 'entry-level', 'mid-level', 'senior'], default: 'fresher', index: true },
  salary: {
    min: Number,
    max: Number,
    currency: { type: String, default: 'USD' },
    period: { type: String, default: 'yearly' }
  },
  skills: [{ type: String, index: true }],
  description: { type: String, required: true },
  responsibilities: [String],
  requirements: [String],
  benefits: [String],
  visaSponsorship: { type: Boolean, default: false, index: true },
  applicantCount: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'paused', 'closed'], default: 'active', index: true },
  postedAt: { type: Date, default: Date.now, index: true }
}, { timestamps: true });

// Create Compound indexes for high performance search
jobSchema.index({ title: 'text', description: 'text', skills: 'text' });
jobSchema.index({ country: 1, workMode: 1, employmentType: 1, experienceLevel: 1 });

let MongooseJob;
try {
  MongooseJob = mongoose.model('Job', jobSchema);
} catch (e) {
  MongooseJob = mongoose.model('Job');
}

class Job {
  static async find(query = {}, options = {}) {
    if (mongoose.connection.readyState === 1) {
      const filter = {};
      if (query.keyword) {
        filter.$or = [
          { title: { $regex: query.keyword, $options: 'i' } },
          { 'company.name': { $regex: query.keyword, $options: 'i' } },
          { skills: { $in: [new RegExp(query.keyword, 'i')] } }
        ];
      }
      if (query.location) filter.location = { $regex: query.location, $options: 'i' };
      if (query.country) filter.country = { $regex: query.country, $options: 'i' };
      if (query.workMode) filter.workMode = query.workMode;
      if (query.employmentType || query.type) filter.employmentType = query.employmentType || query.type;
      if (query.experienceLevel) filter.experienceLevel = query.experienceLevel;
      if (query.recruiterId) filter.recruiterId = query.recruiterId;
      if (query.status) filter.status = query.status;

      let q = MongooseJob.find(filter).sort({ postedAt: -1 });
      if (options.skip) q = q.skip(options.skip);
      if (options.limit) q = q.limit(options.limit);
      return await q;
    }

    let results = [...dbInstance.jobs];
    if (query.keyword) {
      const kw = query.keyword.toLowerCase();
      results = results.filter(j =>
        (j.title && j.title.toLowerCase().includes(kw)) ||
        (j.company && j.company.name && j.company.name.toLowerCase().includes(kw)) ||
        (j.skills && j.skills.some(s => s.toLowerCase().includes(kw))) ||
        (j.description && j.description.toLowerCase().includes(kw))
      );
    }
    if (query.location) {
      const loc = query.location.toLowerCase();
      results = results.filter(j => j.location && j.location.toLowerCase().includes(loc));
    }
    if (query.country) {
      const c = query.country.toLowerCase();
      results = results.filter(j => j.country && j.country.toLowerCase().includes(c));
    }
    if (query.workMode) {
      results = results.filter(j => j.workMode === query.workMode);
    }
    if (query.employmentType || query.type) {
      const t = query.employmentType || query.type;
      results = results.filter(j => j.employmentType === t || j.type === t);
    }
    if (query.experienceLevel) {
      results = results.filter(j => j.experienceLevel === query.experienceLevel);
    }
    if (query.recruiterId) {
      results = results.filter(j => j.recruiterId === query.recruiterId);
    }
    if (query.status) {
      results = results.filter(j => j.status === query.status);
    }

    if (options.skip || options.limit) {
      const start = options.skip || 0;
      const end = options.limit ? start + options.limit : results.length;
      return results.slice(start, end);
    }
    return results;
  }

  static async findById(id) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseJob.findById(id);
    }
    return dbInstance.jobs.find(j => j.id === id || j._id === id);
  }

  static async create(data) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseJob.create(data);
    }
    const newJob = {
      id: data.id || `job_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      _id: data.id || `job_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      postedAt: new Date().toISOString(),
      applicantCount: 0,
      status: 'active',
      ...data
    };
    dbInstance.jobs.unshift(newJob);
    return newJob;
  }

  static async findByIdAndUpdate(id, updateData, options = { new: true }) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseJob.findByIdAndUpdate(id, updateData, options);
    }
    const idx = dbInstance.jobs.findIndex(j => j.id === id || j._id === id);
    if (idx !== -1) {
      dbInstance.jobs[idx] = { ...dbInstance.jobs[idx], ...updateData, updatedAt: new Date().toISOString() };
      return dbInstance.jobs[idx];
    }
    return null;
  }

  static async findByIdAndDelete(id) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseJob.findByIdAndDelete(id);
    }
    const idx = dbInstance.jobs.findIndex(j => j.id === id || j._id === id);
    if (idx !== -1) {
      const deleted = dbInstance.jobs[idx];
      dbInstance.jobs.splice(idx, 1);
      return deleted;
    }
    return null;
  }

  static async countDocuments(query = {}) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseJob.countDocuments(query);
    }
    const results = await this.find(query);
    return results.length;
  }
}

Job.schema = jobSchema;
Job.MongooseModel = MongooseJob;

module.exports = Job;

