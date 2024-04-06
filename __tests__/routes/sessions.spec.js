const request = require('supertest');
const express = require('express');
const sessionsRoutes = require('../../routes/sessions.js');
const controller = require('../../controllers/sessionsController.js');

jest.mock('../../controllers/sessionsController.js');

const mockSession = {
  sessionID: 1,
  tutorID: 101,
  learnerID: 201,
  skillID: 301,
  sessionTime: new Date().toISOString(),
  teamsMeetingLink: 'https://example.com/meeting/1'
};

const mockSessions = [mockSession, { ...mockSession, sessionID: 1 }];

describe('sessions routes', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/sessions', sessionsRoutes);
  });

  it('GET / should call getSessions and return sessions', async () => {
    controller.getSessions.mockImplementation((req, res) => res.json(mockSessions));

    const response = await request(app).get('/sessions');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockSessions);
    expect(controller.getSessions).toHaveBeenCalled();
  });

  it('POST / should call addSession and return session ID', async () => {
    const newSession = { ...mockSession, sessionID: 3 };
    controller.addSession.mockImplementation((req, res) =>
      res.status(201).send(newSession.sessionID.toString())
    );

    const response = await request(app).post('/sessions').send(newSession);

    expect(response.statusCode).toBe(201);
    expect(response.text).toBe(newSession.sessionID.toString());
    expect(controller.addSession).toHaveBeenCalled();
  });
});
