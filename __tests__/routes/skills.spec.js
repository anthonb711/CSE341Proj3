const request = require('supertest');
const express = require('express');
const indexRoute = require('../../routes/index');
const controller = require('../../controllers/skillsController');

jest.mock('../../controllers/skillsController');

const mockSkill = {
  SkillID: 1,
  skillName: 'juggling',
  category: 'fun',
  description: 'juggle some balls'
};

describe('Skills Routes', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/', indexRoute);
  });

  describe('GET /skills', () => {
    it('should call getSkills controller function', async () => {
      controller.getSkills.mockImplementation((req, res) => res.json(mockSkill))
      try {
        const response = await request(app).get('/skills');
        expect(response.statusCode).toBe(200);
        expect(controller.getSkills).toHaveBeenCalled();
      } catch (error) {
        throw error;
      }
    });
  });
});