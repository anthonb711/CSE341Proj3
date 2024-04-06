const request = require('supertest');
const express = require('express');
const routes = require('../../routes/index.js');

const app = express();
app.use(routes);

describe('Route integration tests', () => {
  describe('GET /', () => {
    it('should respond with the home page content', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('hello from Index Controller');
    });
  });

  describe('GET /profile', () => {
    it('should handle the /profile route', async () => {
      const response = await request(app).get('/profile');

      expect(response.statusCode).toBe(200);
    });
  });
});
