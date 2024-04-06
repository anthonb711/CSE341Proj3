require('dotenv').config();
const request = require("supertest");
const express = require("express");
const controller = require("../../controllers/feedbackController.js");
const feedbackRoute = require('../../routes/feedback.js')


jest.mock("../../controllers/feedbackController.js");

const mockFeedback = {
  feedbackID: 1,
  sessionID: 101,
  fromUserID: 201,
  toUserID: 301,
  rating: 8,
  comment: "Great session!",
  createAt: new Date().toISOString(),
};

describe("Feedback Routes", () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use("/feedback", feedbackRoute);
  });

  it("GET / should call getFeedback controller method for ", async () => {
    controller.getFeedback.mockImplementation((req, res) => res.json(mockFeedback));


    await request(app).get("/feedback",controller.getFeedback);
    expect(controller.getFeedback).toHaveBeenCalled();
  });

 
});
