const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const { connectDB } = require('./config/database');
const config = require('./config/environment');
const logger = require('./utils/logger');
const seedDatabase = require('../database/seed/index');
const { seedAdmin } = require('./scripts/seedAdmin');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST']
  }
});

// Socket.IO Real-time Events
io.on('connection', (socket) => {
  logger.info(`[Socket.IO] Client connected: ${socket.id}`);

  socket.on('join_room', (room) => {
    socket.join(room);
    logger.info(`[Socket.IO] Socket ${socket.id} joined room: ${room}`);
  });

  socket.on('send_message', (data) => {
    io.to(data.room || 'global').emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    logger.info(`[Socket.IO] Client disconnected: ${socket.id}`);
  });
});

const startServer = async () => {
  try {
    await connectDB();
    await seedDatabase();
    await seedAdmin();

    server.listen(config.port, () => {
      logger.info(`==================================================`);
      logger.info(`🚀 GEZ Career API & Socket.IO Server running on port ${config.port}`);
      logger.info(`🌐 Environment: ${config.nodeEnv}`);
      logger.info(`==================================================`);
    });
  } catch (error) {
    logger.error('Failed to start GEZ Career Server:', error);
  }
};

startServer();

module.exports = { app, server, io };
