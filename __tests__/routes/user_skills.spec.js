require('dotenv').config();
const request = require('supertest');
const express = require('express');
const controller = require('../../controllers/user_skillsController');
const skillsRoute = require('../../routes/user_skills');

jest.mock('../../controllers/user_skillsController');

const mockUserSkill = {
  userSkillID: 1,
  userID: 101,
  skillID: 301,
  skillLevel: 'beginner',
  isTeachable: 'y',
  isLearnable: 'n'
};

describe('User Skills Routes', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());

     app.use('/user_skills', skillsRoute);
  });

  describe('GET /user_skills', () => {
    it('should call getUserSkills controller function', async () => {
      controller.getUserSkills.mockImplementation((req, res) => res.json(mockUserSkill))
      try {
        const response =  await request(app).get('/user_skills');
        expect(response.statusCode).toBe(200);
        expect(controller.getUserSkills).toHaveBeenCalled();
      } catch (error) {
        throw error;
      }
    });
  });
});
