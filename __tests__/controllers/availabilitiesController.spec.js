const {
    addAvailabilities,
  } = require("../../controllers/availabilitiesController.js");
  const Availability = require("../../models/availabilities.js");
  
  jest.mock("../../models/availabilities.js");
  
  describe("addAvailabilities", () => {
    afterEach(jest.clearAllMocks);
  
    it("should return the ID of inserted availability", async () => {
      const req = {
        body: {
          availabilityID: "123",
          userID: "456",
          startTime: new Date(),
          endTime: new Date(),
          isBooked: false,
        },
      };
  
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
  
      const mockInsertedAvailability = { _id: "mockId" };
  
      Availability.prototype.save.mockResolvedValue(mockInsertedAvailability);
  
      await addAvailabilities(req, res);
  
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith("mockId");
    });
  });
  