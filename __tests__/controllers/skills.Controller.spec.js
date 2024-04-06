const { getSkills, addSkill, getSkillById, updateSkill, deleteSkill } = require('../../controllers/skillsController');
const Skill = require('../../models/skill');

// Mock the Skill model methods
jest.mock('../../models/skill');

describe('Skills Controller', () => {
  describe('getSkills', () => {
    it('should return all skills', async () => {
      // Mock data to be returned by Skill.find()
      const mockSkills = [
        { skillID: 1, skillName: 'Skill 1',  category: 'Category 1', description: 'description 1'}, 
        { skillID: 2, skillName: 'Skill 2',  category: 'Category 2', description: 'description 2' }
    ];

      Skill.find.mockResolvedValue(mockSkills);

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getSkills({}, mockResponse);

      expect(Skill.find).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockSkills);
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
