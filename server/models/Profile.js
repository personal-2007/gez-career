const { dbInstance, mongoose } = require('../config/database');

const profileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true, index: true },
  headline: { type: String, default: '' },
  about: { type: String, default: '' },
  location: { type: String, default: '' },
  country: { type: String, default: '' },
  city: { type: String, default: '' },
  careerStatus: { type: String, enum: ['student', 'fresher', 'working_professional', 'career_switcher'], default: 'fresher', index: true },
  completionScore: { type: Number, default: 20 },
  skills: [{ type: String, index: true }],
  education: [{
    degree: String,
    institution: String,
    fieldOfStudy: String,
    graduationYear: String,
    cgpa: String,
    educationLevel: String
  }],
  experience: [{
    title: String,
    company: String,
    location: String,
    startDate: String,
    endDate: String,
    current: Boolean,
    description: String
  }],
  projects: [{
    title: String,
    description: String,
    link: String,
    techStack: [String]
  }],
  certifications: [{
    title: String,
    issuer: String,
    issueDate: String,
    credentialUrl: String
  }],
  resume: {
    url: String,
    name: String,
    uploadedAt: Date
  },
  preferences: {
    desiredRole: String,
    preferredCountries: [String],
    preferredCities: [String],
    workMode: String,
    employmentType: String,
    minSalary: Number,
    experienceLevel: String,
    openToWork: { type: Boolean, default: true }
  },
  savedJobs: [{ type: String, index: true }],
  savedJobAlerts: [mongoose.Schema.Types.Mixed]
}, { timestamps: true });

let MongooseProfile;
try {
  MongooseProfile = mongoose.model('Profile', profileSchema);
} catch (e) {
  MongooseProfile = mongoose.model('Profile');
}

const calculateCompletionScore = (profile) => {
  if (!profile) return 0;
  let score = 10; // base score for account creation
  if (profile.headline) score += 10;
  if (profile.about) score += 10;
  if (profile.location || profile.city || profile.country) score += 10;
  if (profile.skills && profile.skills.length > 0) score += 15;
  if (profile.education && profile.education.length > 0) score += 15;
  if (profile.experience && profile.experience.length > 0) score += 10;
  if (profile.projects && profile.projects.length > 0) score += 10;
  if (profile.resume && profile.resume.url) score += 10;
  return Math.min(100, score);
};

class Profile {
  static async findByUserId(userId) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseProfile.findOne({ userId });
    }
    return dbInstance.profiles.find(p => p.userId === userId);
  }

  static async findOne(query) {
    if (mongoose.connection.readyState === 1) {
      return await MongooseProfile.findOne(query);
    }
    return dbInstance.profiles.find(p => {
      return Object.keys(query).every(key => p[key] === query[key]);
    });
  }

  static async update(userId, updates) {
    if (mongoose.connection.readyState === 1) {
      const existing = await MongooseProfile.findOne({ userId });
      const merged = existing ? { ...existing.toObject(), ...updates } : { userId, ...updates };
      merged.completionScore = calculateCompletionScore(merged);
      return await MongooseProfile.findOneAndUpdate({ userId }, merged, { upsert: true, new: true });
    }

    let profile = dbInstance.profiles.find(p => p.userId === userId);
    if (profile) {
      Object.assign(profile, updates);
    } else {
      profile = { userId, savedJobs: [], ...updates };
      dbInstance.profiles.push(profile);
    }
    profile.completionScore = calculateCompletionScore(profile);
    return profile;
  }
}

Profile.schema = profileSchema;
Profile.MongooseModel = MongooseProfile;
Profile.calculateCompletionScore = calculateCompletionScore;

module.exports = Profile;

