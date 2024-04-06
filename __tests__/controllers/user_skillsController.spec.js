const { getSkills, addSkill, getSkillById, updateSkill, deleteSkill } = require('../../controllers/skillsController');
const Skill = require('../../models/skill');

// Mock the Skill model methods
jest.mock('../../models/skill');

describe('User Skills Controller', () => {
  describe('getUserSkills', () => {
    it('should return all skills', async () => {
      // Mock data to be returned by Skill.find()
      const mockUserSkills = [
        {
          userSkillID: 1,
          userID: 123,
          skillID: 456,
          skillLevel: 'beginner',
          isTeachable: 'y',
          isLearnable: 'n'
        },
        {
          userSkillID: 2,
          userID: 456,
          skillID: 789,
          skillLevel: 'intermediate',
          isTeachable: 'n',
          isLearnable: 'y'
        }
      ];

      Skill.find.mockResolvedValue(mockUserSkills);

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getSkills({}, mockResponse);

      expect(Skill.find).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUserSkills);
    });

    it('should handle errors', async () => {
      Skill.find.mockRejectedValue(new Error('Database error'));

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getSkills({}, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
    });
  });

  // Add more test cases for other controller methods (addSkill, getSkillById, updateSkill, deleteSkill) similarly
});

