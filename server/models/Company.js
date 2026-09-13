const { dbInstance, mongoose } = require('../config/database');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  logo: { type: String, default: '' },
  industry: { type: String, default: 'Technology', index: true },
  website: { type: String, default: '' },
  location: { type: String, default: '' },
  description: { type: String, default: '' },
  employeeCount: { type: String, default: '50-200' },
  rating: { type: Number, default: 4.5 },
  reviewCount: { type: Number, default: 0 },
  recruiterId: { type: String, index: true }
}, { timestamps: true });

let MongooseCompany;
try {
  MongooseCompany = mongoose.model('Company', companySchema);
} catch (e) {
  MongooseCompany = mongoose.model('Company');
}

class Company {
  static async find(query = {}) {
    if (mongoose.connection.readyState === 1) {
      const filter = {};
      if (query.keyword) {
        filter.$or = [
          { name: { $regex: query.keyword, $options: 'i' } },
          { industry: { $regex: query.keyword, $options: 'i' } }
        ];
      }
      return await MongooseCompany.find(filter);
    }
    let results = [...dbInstance.companies];
    if (query.keyword) {
      const kw = query.keyword.toLowerCase();
      results = results.filter(c => c.name.toLowerCase().includes(kw) || (c.industry && c.industry.toLowerCase().includes(kw)));
    }
    return results;
  }

  static async findById(id) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseCompany.findById(id);
    }
    return dbInstance.companies.find(c => c.id === id || c._id === id);
  }

  static async create(data) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseCompany.create(data);
    }
    const comp = {
      id: data.id || `comp_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      _id: data.id || `comp_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      rating: 4.5,
      reviewCount: 0,
      ...data
    };
    dbInstance.companies.push(comp);
    return comp;
  }
}

Company.schema = companySchema;
Company.MongooseModel = MongooseCompany;

module.exports = Company;

