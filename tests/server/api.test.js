const http = require('http');
const assert = require('assert');
const app = require('../../server/app');

const testHealth = () => new Promise((resolve, reject) => {
  http.get('http://localhost:5099/api/health', (res) => {
    const chunks = [];
    res.on('data', chunk => chunks.push(chunk));
    res.on('end', () => {
      const body = Buffer.concat(chunks).toString();
      console.log('[TEST SERVER] Health status:', res.statusCode, body);
      assert.strictEqual(res.statusCode, 200);
      resolve();
    });
  }).on('error', reject);
});

const testInvalidLogin = () => new Promise((resolve, reject) => {
  const payload = JSON.stringify({ email: 'missing@example.com', password: 'wrongpassword' });
  const req = http.request('http://localhost:5099/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  }, (res) => {
    const chunks = [];
    res.on('data', chunk => chunks.push(chunk));
    res.on('end', () => {
      const body = JSON.parse(Buffer.concat(chunks).toString());
      console.log('[TEST SERVER] Invalid login status:', res.statusCode, body.message);
      assert.strictEqual(res.statusCode, 401);
      resolve();
    });
  });
  req.on('error', reject);
  req.write(payload);
  req.end();
});

const testProtectedUserRouteWithoutToken = () => new Promise((resolve, reject) => {
  http.get('http://localhost:5099/api/users', (res) => {
    const chunks = [];
    res.on('data', chunk => chunks.push(chunk));
    res.on('end', () => {
      const body = JSON.parse(Buffer.concat(chunks).toString());
      console.log('[TEST SERVER] Protected route status:', res.statusCode, body.message);
      assert.strictEqual(res.statusCode, 401);
      resolve();
    });
  }).on('error', reject);
});

console.log('[TEST SERVER] Testing server endpoints...');
const server = app.listen(5099, async () => {
  try {
    await testHealth();
    await testInvalidLogin();
    await testProtectedUserRouteWithoutToken();
    console.log('[TEST SERVER] All tests passed.');
  } catch (error) {
    console.error('[TEST SERVER] Test failed:', error);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
