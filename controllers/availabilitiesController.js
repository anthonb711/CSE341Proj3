const ObjectId = require('mongodb').ObjectId;
const Availability = require('../models/availabilities');

/************************************************************************
 *  GET AVAILABILITIES- HTTP:GET
 *************************************************************************/
const getAvailabilities = async (req, res) => {
  // #swagger.tags = ['Availabilities']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const allAvailabilities = await Availability.find();
    res.status(200).json(allAvailabilities);
  } catch (error) {
    console.error('Error fetching vailabilities:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/************************************************************************
 *  ADD AVAILABILITIES - HTTP:POST
 *************************************************************************/
const addAvailabilities = async (req, res) => {
  // #swagger.tags = ['Availabilities']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const { availabilityID, userID, startTime, endTime, isBooked } = req.body;
    const availabilities = new Availability({
      availabilityID,
      userID,
      startTime,
      endTime,
      isBooked
    });

    const insertedAvailabilities = await availabilities.save();
    res.status(201).json(insertedAvailabilities._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/************************************************************************
 *  GET AVAIALBILITY BY ID - HTTP:GET
 *************************************************************************/
const getAvailabilityId = async (req, res) => {
  // #swagger.tags = ['Availabilities']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }

  const availabilityId = new ObjectId(req.params.id);

  try {
    const thisAvailabilitiy = await Availability.findById(availabilityId);
    res.status(200).json(thisAvailabilitiy);
  } catch (error) {
    console.error('Error fetching availability by ID:');
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  getAvailabilities,
  addAvailabilities,
  getAvailabilityId
  // updateAvailability,
  //   deleteAvailability,
};
