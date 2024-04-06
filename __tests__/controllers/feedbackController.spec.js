const { addFeedback } = require("../../controllers/feedbackController.js");
const Feedback = require("../../models/feeback.js");

jest.mock("../../models/feeback.js");

describe("addFeedback", () => {
  afterEach(jest.clearAllMocks);

  it("should return the ID of inserted feedback", async () => {
    const req = {
      body: {
        feedbackID: "123",
        sessionID: "456",
        fromUserID: "789",
        toUserID: "012",
        rating: 5,
        comment: "Great session!",
        time: new Date(),
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockInsertedFeedback = { _id: "mockId" };

    Feedback.prototype.save.mockResolvedValue(mockInsertedFeedback);

    await addFeedback(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith("mockId");
  });
});
