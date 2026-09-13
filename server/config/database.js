const mongoose = require('mongoose');

class MemoryDB {
  constructor() {
    this.users = [];
    this.profiles = [];
    this.jobs = [];
    this.companies = [];
    this.applications = [];
    this.resumes = [];
    this.reviews = [];
    this.salaries = [];
    this.messages = [];
    this.notifications = [];
    this.interviews = [];
    this.posts = [];
    this.connections = [];
    this.alerts = [];
    this.courses = [];
    this.countries = [
      { id: 'c1', name: 'United States', code: 'US', jobCount: 1420 },
      { id: 'c2', name: 'United Kingdom', code: 'UK', jobCount: 890 },
      { id: 'c3', name: 'Canada', code: 'CA', jobCount: 650 },
      { id: 'c4', name: 'Germany', code: 'DE', jobCount: 520 },
      { id: 'c5', name: 'Australia', code: 'AU', jobCount: 410 },
      { id: 'c6', name: 'Singapore', code: 'SG', jobCount: 380 },
      { id: 'c7', name: 'India', code: 'IN', jobCount: 1850 },
      { id: 'c8', name: 'Remote / Global', code: 'WW', jobCount: 3200 }
    ];
  }
}

const dbInstance = new MemoryDB();
let isMongoConnected = false;

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;
  if (mongoUri && process.env.USE_REAL_MONGODB === 'true') {
    try {
      const conn = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      isMongoConnected = true;
      console.log(`[GEZ-CAREER DB] Connected to MongoDB: ${conn.connection.host}`);
      return conn;
    } catch (err) {
      console.warn(`[GEZ-CAREER DB] MongoDB connection failed. Falling back to active Document MemoryDB Store.`);
    }
  } else {
    console.log('[GEZ-CAREER DB] Initialized In-Memory & Document Store system.');
  }
  return dbInstance;
};

module.exports = { connectDB, dbInstance, mongoose, isMongoConnected: () => isMongoConnected };

