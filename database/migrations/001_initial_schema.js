module.exports = {
  up: async (db) => {
    console.log('[MIGRATION 001] Initializing collections and indexes...');
  },
  down: async (db) => {
    console.log('[MIGRATION 001] Rolling back initial schema...');
  }
};
