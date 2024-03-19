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

module.exports = {
  getAvailabilities,
  addAvailabilities
  // getAvailabilitiesId,
  // updateAvailabilities,
  //   deleteAvailabilities,
};
