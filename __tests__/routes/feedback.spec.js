const request = require("supertest");
const express = require("express");
const routes = require("../../routes/index.js");
const controller = require("../../controllers/feedbackController.js");


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
    app.use("/", routes);
  });

  it("GET / should call getFeedback controller method for ", async () => {
    controller.getFeedback.mockImplementation((req, res) => res.json(mockFeedback));


    await request(app).get("/feedback");
    expect(controller.getFeedback).toHaveBeenCalled();
  });

 
});
