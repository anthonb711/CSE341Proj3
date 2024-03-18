const ObjectId = require('mongodb').ObjectId;
const { json } = require('body-parser');
const UserProfile = require('../models/user_profile');

const getProfiles = async (req, res) => {
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
    console.log(`${req.body.userID} req.body1`);
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

const getProfileById = async (req, res) => {
  // #swagger.tags = ['User Profile']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const profileId = new ObjectId(req.params.id);
  try {
    const thisProfile = await Profile.findById(profileId);
    res.status(200).json(thisProfile);
  } catch (error) {
    console.error('Error fetching profile by ID:');
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getProfiles,
  addUserProfile,
  getProfileById
};
