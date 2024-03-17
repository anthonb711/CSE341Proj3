
const ObjectId = require('mongodb').ObjectId;
const UserProfile = require('../models/user_profile');

const getProfile = (req, res) => {
  // #swagger.tags = ['User Profile']
  /* #swagger.security = [{
            "OAuth2": [
                'read'
                'write'
            ]
    }] */
  res.send('Hello from user_profile');
};


// POSTS
const addUserProfile = async (req, res) => {
  // #swagger.tags = ['User Profile']
  /* #swagger.security = [{
            "OAuth2": [
                'read',
                'write'
            ]
    }] */
  try {
    const { userID, firstName, lastName, teamsID, email } = req.body;
    const userProfile = new UserProfile({
      userID,
      firstName,
      lastName,
      teamsID,
      email
    });

    const insertedUserProfile = await userProfile.save();
    res.status(201).json(userProfile._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getProfile,
    addUserProfile
 };
