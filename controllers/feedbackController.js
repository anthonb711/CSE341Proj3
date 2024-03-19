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

/************************************************************************
 *  ADD FEEDBACK - HTTP:POST
 *************************************************************************/
const addFeedback = async (req, res) => {
  // #swagger.tags = ['Feedback']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const { feedbackID, sessionID, fromUserID, toUserID, rating, comment, time } = req.body;
    const feedback = new Feedback({
      feedbackID,
      sessionID,
      fromUserID,
      toUserID,
      rating,
      comment,
      time
    });

    const insertedFeedback = await feedback.save();
    res.status(201).json(insertedFeedback._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getFeedback,
  addFeedback

  //getFeedbackById,
  //updateFeedback,
  //deleteFeedback,
};
