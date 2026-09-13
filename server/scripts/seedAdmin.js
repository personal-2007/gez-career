require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

const User = require('../models/User');
const { hashPassword } = require('../utils/password');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@gezcareer.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

const seedAdmin = async () => {
  const existingAdmin = await User.findOne({ email: ADMIN_EMAIL.toLowerCase() });

  if (existingAdmin) {
    if (existingAdmin.role !== 'admin') {
      existingAdmin.role = 'admin';
      if (existingAdmin.save) {
        await existingAdmin.save();
      }
    }
    return existingAdmin;
  }

  const hashedPassword = await hashPassword(ADMIN_PASSWORD);
  const adminUser = {
    id: `usr_admin_${Date.now()}`,
    name: 'Gez Career Admin',
    email: ADMIN_EMAIL,
    password: hashedPassword,
    role: 'admin',
    accountStatus: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  return User.create(adminUser);
};

if (require.main === module) {
  seedAdmin()
    .then((admin) => {
      console.log('[GEZ ADMIN] Admin seed complete:', { email: admin.email, role: admin.role });
    })
    .catch((error) => {
      console.error('[GEZ ADMIN] Admin seed failed:', error);
      process.exit(1);
    });
}

module.exports = { seedAdmin, ADMIN_EMAIL, ADMIN_PASSWORD };
