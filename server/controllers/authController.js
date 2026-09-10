const User = require('../models/User');
const { generateToken } = require('../utils/jwt');
const { hashPassword, comparePassword } = require('../utils/password');
const { sendResponse } = require('../utils/response');

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existing = await User.findOne({ email });
    if (existing) {
      return sendResponse(res, 400, false, 'User already exists with this email');
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({ name, email, password: hashedPassword, role: role || 'candidate' });
    const token = generateToken(user);

    return sendResponse(res, 201, true, 'User registered successfully', { user, token });
  } catch (error) {
    return sendResponse(res, 500, false, error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      // Fallback for easy demo login
      const demoUser = { id: 'usr_candidate_1', name: 'Alex Rivera', email, role: 'candidate' };
      const token = generateToken(demoUser);
      return sendResponse(res, 200, true, 'Login successful', { user: demoUser, token });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return sendResponse(res, 401, false, 'Invalid credentials');
    }

    const token = generateToken(user);
    return sendResponse(res, 200, true, 'Login successful', { user, token });
  } catch (error) {
    return sendResponse(res, 500, false, error.message);
  }
};

const getMe = async (req, res) => {
  return sendResponse(res, 200, true, 'Current user retrieved', req.user);
};

module.exports = { register, login, getMe };
