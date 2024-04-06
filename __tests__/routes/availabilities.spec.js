require('dotenv').config();
const request = require('supertest');
const express = require('express');
const controller = require('../../controllers/availabilitiesController.js');
const availabilitiesRoute = require('../../routes/availabilities');

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
    app.use('/availabilities', availabilitiesRoute);
    });
 
  it('GET / should call getAvailabilities controller method', async () => {
    controller.getAvailabilities.mockImplementation((req, res) => res.json(mockAvailability));

    await request(app).get('/availabilities');
    expect(controller.getAvailabilities).toHaveBeenCalled();
  });
 
});