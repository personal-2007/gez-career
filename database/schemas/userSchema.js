// MongoDB / Mongoose Schema definition reference for production deployment
const userSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['candidate', 'recruiter', 'admin'], default: 'candidate' },
  avatar: { type: String },
  createdAt: { type: Date, default: Date.now }
};

module.exports = userSchema;
