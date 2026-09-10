// Smoke Test for API Server
const http = require('http');
const app = require('../../server/app');

console.log('[TEST SERVER] Testing server endpoints...');
const server = app.listen(5099, () => {
  http.get('http://localhost:5099/api/health', (res) => {
    console.log(`[TEST SERVER] Health check status code: ${res.statusCode}`);
    server.close();
  });
});
