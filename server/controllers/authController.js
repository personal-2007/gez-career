const User = require('../models/User');
const { generateToken } = require('../utils/jwt');
const { hashPassword, comparePassword } = require('../utils/password');
const { sendResponse } = require('../utils/response');

const normalizeRole = (role) => {
  const normalized = (role || 'user').toLowerCase();
  if (normalized === 'candidate') return 'user';
  return normalized;
};

const sanitizeUser = (user) => {
  if (!user) return null;
  const { password, __v, ...safeUser } = user;
  return safeUser;
};

const register = async (req, res) => {
  try {
    const { name, email, password, role, accountType } = req.body;
    const emailValue = email?.toLowerCase();

    if (!name || !emailValue || !password) {
      return sendResponse(res, 400, false, 'Name, email, and password are required');
    }

    const existing = await User.findOne({ email: emailValue });
    if (existing) {
      return sendResponse(res, 400, false, 'User already exists with this email');
    }

    const hashedPassword = await hashPassword(password);
    const userRole = normalizeRole(role || accountType || 'user');
    const user = await User.create({
      name,
      email: emailValue,
      password: hashedPassword,
      role: userRole
    });

    const token = generateToken(user);
    return sendResponse(res, 201, true, 'User registered successfully', {
      user: sanitizeUser(user),
      token
    });
  } catch (error) {
    return sendResponse(res, 500, false, error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email?.toLowerCase() });

    if (!user) {
      return sendResponse(res, 401, false, 'Invalid credentials');
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return sendResponse(res, 401, false, 'Invalid credentials');
    }

    const token = generateToken({ ...user, role: normalizeRole(user.role) });
    return sendResponse(res, 200, true, 'Login successful', { user: sanitizeUser(user), token });
  } catch (error) {
    return sendResponse(res, 500, false, error.message);
  }
};

const getMe = async (req, res) => {
  return sendResponse(res, 200, true, 'Current user retrieved', sanitizeUser(req.user));
};

module.exports = { register, login, getMe, normalizeRole };
