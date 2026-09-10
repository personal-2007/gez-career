const { dbInstance } = require('../config/database');

class Job {
  static async find(query = {}) {
    let results = [...dbInstance.jobs];
    if (query.keyword) {
      const kw = query.keyword.toLowerCase();
      results = results.filter(j => 
        j.title.toLowerCase().includes(kw) || 
        j.company.name.toLowerCase().includes(kw) ||
        (j.skills && j.skills.some(s => s.toLowerCase().includes(kw)))
      );
    }
    if (query.location) {
      const loc = query.location.toLowerCase();
      results = results.filter(j => j.location.toLowerCase().includes(loc));
    }
    if (query.type) {
      results = results.filter(j => j.type === query.type);
    }
    return results;
  }

  static async findById(id) {
    return dbInstance.jobs.find(j => j.id === id || j._id === id);
  }

  static async create(data) {
    const job = {
      id: `job_${Date.now()}`,
      postedAt: new Date().toISOString(),
      applicantCount: 0,
      ...data
    };
    dbInstance.jobs.unshift(job);
    return job;
  }
}

module.exports = Job;
