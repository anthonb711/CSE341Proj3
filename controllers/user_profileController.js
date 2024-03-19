const ObjectId = require('mongodb').ObjectId;
const UserProfile = require('../models/user_profile');

/************************************************************************
 *  GET USER PROFILES - HTTP:GET
 *************************************************************************/
const getUserProfiles = async (req, res) => {
  // #swagger.tags = ['User Profile']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const allProfiles = await UserProfile.find();
    res.status(200).json(allProfiles);
  } catch (error) {
    console.error('Error fetching user profiles:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/************************************************************************
 *  ADD USER PROFILE - HTTP:POST
 *************************************************************************/
const addUserProfile = async (req, res) => {
  // #swagger.tags = ['User Profile']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

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

/************************************************************************
 *  GET USER PROFILE BY ID - HTTP:GET
 *************************************************************************/
const getUserProfileById = async (req, res) => {
  // #swagger.tags = ['User Profile']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const userProfileId = new ObjectId(req.params.id);
  try {
    const thisUserProfile = await UserProfile.findById(userProfileId);
    res.status(200).json(thisUserProfile);
  } catch (error) {
    console.error('Error fetching user profile by ID:');
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/************************************************************************
 *  UPDATE USER PROFILE BY ID - HTTP:PUT
 *************************************************************************/
const updateUserProfile = async (req, res) => {
  // #swagger.tags = ['User Profile']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }

  const userProfileId = new ObjectId(req.params.id);
  console.log(req.params.id);

  try {
    const { userID, firstName, lastName, teamsID, email } = req.body;

    const userProfileUpdate = await UserProfile.findOneAndUpdate(
      { _id: userProfileId },
      { firstName, userID, teamsID, lastName, email },
      { new: true }
    );

    if (!userProfileUpdate) {
      return res.status(404).json({ error: 'User profile not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/************************************************************************
 *  DELETE USER PROFILE BY ID - HTTP:DELETE
 *************************************************************************/
const deleteUserProfile = async (req, res) => {
  // #swagger.tags = ['User Profile']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const userProfileId = new ObjectId(req.params.id);

  try {
    await UserProfile.deleteOne({ _id: userProfileId });
    res.sendStatus(200);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserProfiles,
  addUserProfile,
  getUserProfileById,
  updateUserProfile,
  deleteUserProfile
};
