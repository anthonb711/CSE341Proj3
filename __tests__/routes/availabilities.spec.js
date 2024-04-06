const request = require('supertest');
const express = require('express');
const indexRoute = require('../../routes/index.js');
const controller = require('../../controllers/availabilitiesController.js');
 
jest.mock('../../controllers/availabilitiesController.js');


const mockAvailability = {
  availabilityID: 1,
  userID: 101,
  startTime: new Date().toISOString(),
  endTime: new Date().toISOString(),
  isBooked: 'n'
};
 
describe('Availabilities Routes', () => {
  let app;
 
  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/', indexRoute);
    });
 
  it('GET / should call getAvailabilities controller method', async () => {
    controller.getAvailabilities.mockImplementation((req, res) => res.json(mockAvailability));

    await request(app).get('/availabilities');
    expect(controller.getAvailabilities).toHaveBeenCalled();
  });
 
});