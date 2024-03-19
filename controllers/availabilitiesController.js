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

module.exports = {
  getAvailabilities
  // addAvailabilities,
  // getAvailabilitiesId,
  // updateAvailabilities,
  //   deleteAvailabilities,
};
