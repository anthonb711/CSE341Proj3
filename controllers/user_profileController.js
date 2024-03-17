
const ObjectId = require('mongodb').ObjectId;
const { json } = require('body-parser');
const UserProfile = require('../models/user_profile')

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
    console.log('FROM GET USER_PROFILES');
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
    console.log(req.body);
  const { userID, firstName, lastName, teamsID, email } = req.body;
    console.log(`${(req.body.userID)} req.body1`);
    const userProfile = new UserProfile({
      userID,
      firstName,
      lastName,
      teamsID,
      email
    });

    const insertedUserProfile = await userProfile.save();
    res.status(201).json(insertedUserProfile._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getProfiles,
    addUserProfile
 };
