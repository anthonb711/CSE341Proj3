const { getSessions } = require('../../controllers/sessionsController.js');
const Session = require('../../models/session.js');

 
jest.mock('../../models/session.js');

 
const mockSessions = [
  {
    sessionID: 1,
    tutorID: 101,
    learnerID: 201,
    skillID: 301,
    sessionTime: new Date(),
    teamsMeetingLink: 'https://example.com/meeting/1'
  },
  {
    sessionID: 2,
    tutorID: 102,
    learnerID: 202,
    skillID: 302,
    sessionTime: new Date(),
    teamsMeetingLink: 'https://example.com/meeting/2'
  }
];

describe('getSessions', () => {
  it('should return all sessions and a status of 200', async () => {
    Session.find.mockResolvedValue(mockSessions);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    // Call the function being tested
    await getSessions(req, res);

    // Assertions to verify the behavior
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockSessions);
  });
});
