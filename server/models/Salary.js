const { dbInstance, mongoose } = require('../config/database');

const salarySchema = new mongoose.Schema({
  role: { type: String, required: true, index: true },
  location: { type: String, required: true, index: true },
  country: { type: String, default: 'United States', index: true },
  min: { type: Number, required: true },
  max: { type: Number, required: true },
  median: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  experienceLevel: { type: String, default: 'mid-level' },
  sampleCount: { type: Number, default: 45 }
}, { timestamps: true });

let MongooseSalary;
try {
  MongooseSalary = mongoose.model('Salary', salarySchema);
} catch (e) {
  MongooseSalary = mongoose.model('Salary');
}

class Salary {
  static async find(query = {}) {
    if (mongoose.connection.readyState === 1) {
      const filter = {};
      if (query.role) filter.role = { $regex: query.role, $options: 'i' };
      if (query.location) filter.location = { $regex: query.location, $options: 'i' };
      if (query.country) filter.country = { $regex: query.country, $options: 'i' };
      return await MongooseSalary.find(filter);
    }
    let results = [...dbInstance.salaries];
    if (query.role) {
      const r = query.role.toLowerCase();
      results = results.filter(s => s.role.toLowerCase().includes(r));
    }
    if (query.location) {
      const l = query.location.toLowerCase();
      results = results.filter(s => s.location.toLowerCase().includes(l));
    }
    return results;
  }

  static async create(data) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseSalary.create(data);
    }
    const sal = {
      id: data.id || `sal_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      _id: data.id || `sal_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      ...data
    };
    dbInstance.salaries.push(sal);
    return sal;
  }
}

Salary.schema = salarySchema;
Salary.MongooseModel = MongooseSalary;

module.exports = Salary;

