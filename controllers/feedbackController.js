const ObjectId = require('mongodb').ObjectId;
const Feedback = require('../models/feeback');

/************************************************************************
 *  GET FEEDBACK - HTTP:GET
 *************************************************************************/
const getFeedback = async (req, res) => {
  // #swagger.tags = ['Feedback']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const allFeedback = await Feedback.find();
    res.status(200).json(allFeedback);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getFeedback
  //addFeedback,

  //getFeedbackById,
  //updateFeedback,
  //deleteFeedback,
};
