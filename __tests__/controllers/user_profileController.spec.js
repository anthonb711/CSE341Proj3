const { getUserProfiles } = require('../../controllers/user_profileController.js');
const UserProfile = require('../../models/user_profile.js');

jest.mock('../../models/user_profile.js');

const mockUserProfiles = [
  {
    userID: '321654162187',
    firstName: 'Josh',
    lastName: 'Brown',
    teamsID: 'anthonb711@byui.edu',
    email: 'anthonb711@icloud.com'
  },
  {
    userID: '321651651613',
    firstName: 'John',
    lastName: 'Doe',
    teamsID: 'doeBoy711@byui.edu',
    email: 'doeBoy711@icloud.com'
  }
];

describe('getUserProfile', () => {
  it('should return all user profiles and a status of 200', async () => {
    UserProfile.find.mockResolvedValue(mockUserProfiles);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    // Call the function being tested
    await getUserProfiles(req, res);

    // Assertions to verify the behavior
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUserProfiles);
  });
});
