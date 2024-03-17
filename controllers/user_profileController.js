
const ObjectId = require('mongodb').ObjectId;
const UserProfile = require('../models/user_profile');

const getProfiles =  async(req, res) => {
  // #swagger.tags = ['User Profile']
  /* #swagger.security = [{
            "OAuth2": [
                'read'
                'write'
            ]
    }] */
    try {
    const allProfiles = await UserProfile.find();
    res.status(200).json(allProfiles);
  } catch (error) {
    console.error('Error fetching user profiles:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
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
    getProfiles,
    addUserProfile
 };
