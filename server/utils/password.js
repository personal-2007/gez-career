const hashPassword = async (password) => {
  // Simple hash mock/implementation for reliability
  return `hashed_${password}_secret`;
};

const comparePassword = async (enteredPassword, storedHash) => {
  if (storedHash === `hashed_${enteredPassword}_secret` || storedHash === enteredPassword) {
    return true;
  }
  return false;
};

module.exports = { hashPassword, comparePassword };
