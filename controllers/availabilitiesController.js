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
    const thisAvailability = await Availability.findById(availabilityId);
    res.status(200).json(thisAvailability);
  } catch (error) {
    console.error('Error fetching availability by ID:');
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/************************************************************************
 *  UPDATE AVAILIBILITY BY ID - HTTP:PUT
 *************************************************************************/
const updateAvailability = async (req, res) => {
  // #swagger.tags = ['Availabilities']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }

  const availabilityId = new ObjectId(req.params.id);
  console.log(req.params.id);

  try {
    const { availabilityID, userID, startTime, endTime, isBooked } = req.body;
    const availabilityUpdate = await Availability.findOneAndUpdate(
      { _id: availabilityId },
      { availabilityID, userID, startTime, endTime, isBooked },
      { new: true }
    );

    if (!availabilityUpdate) {
      return res.status(404).json({ error: 'Availability' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/************************************************************************
 *  DELETE AVAILABILITY BY ID - HTTP:DELETE
 *************************************************************************/
const deleteAvailability = async (req, res) => {
  // #swagger.tags = ['Availabilities']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }

  const availabilityId = new ObjectId(req.params.id);

  try {
    await Availability.deleteOne({ _id: availabilityId });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAvailabilities,
  addAvailabilities,
  getAvailabilityId,
  updateAvailability,
  deleteAvailability
};
