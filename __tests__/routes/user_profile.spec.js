const request = require('supertest');
const express = require('express');
const userProfileRoutes = require('../../routes/user_profile.js');
const controller = require('../../controllers/user_profileController.js');

jest.mock('../../controllers/user_profileController.js');

const mockUserProfile = {
    userID :321654162187,
    firstName: "John",
    lastName: "Doe",
    teamsID: "johnDoe@test.com",
    email :"johnDoe@711@test.com"
    };

const mockUserProfiles = [mockUserProfile, { ...mockUserProfile, email: "johnDoe711@test.com" }];

describe('user_profile routes', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/user_profile', userProfileRoutes);
  });

  it('GET / should call getUserProfiles and return User Profile', async () => {
    controller.getUserProfiles.mockImplementation((req, res) => res.json(mockUserProfile));

    const response = await request(app).get('/user_profile');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockUserProfile);
    expect(controller.getUserProfiles).toHaveBeenCalled();
  });

  it('POST / should call addUserProfile and return user email', async () => {
    const newUserProfile = { ...mockUserProfile, email: "doeboy711@test.com"};
    controller.addUserProfile.mockImplementation((req, res) => res.status(201).send(newUserProfile.email.toString()));

    const response = await request(app).post('/user_profile').send(newUserProfile);
    console.log(`MY CONSOLE LOG ${response.text}`);
    expect(response.statusCode).toBe(201);
    expect(response.text).toBe(newUserProfile.email.toString());
    expect(controller.addUserProfile).toHaveBeenCalled();
  });

});