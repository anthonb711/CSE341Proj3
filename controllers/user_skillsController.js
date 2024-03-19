const ObjectId = require('mongodb').ObjectId;
const UserSkill = require('../models/user_skill');

/************************************************************************
 *  GET USER SKILLS - HTTP:GET
 *************************************************************************/
const getUserSkills = async (req, res) => {
  // #swagger.tags = ['User Skills']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const allUserSkills = await UserSkill.find();
    res.status(200).json(allUserSkills);
  } catch (error) {
    console.error('Error fetching user skills:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/************************************************************************
 *  ADD USER SKILL - HTTP:POST
 *************************************************************************/
const addUserSkill = async (req, res) => {
  // #swagger.tags = ['User Skills']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const { userSkillID, userID, skillID, skillLevel, isTeachable, isLearnable } = req.body;
    const userSkill = new UserSkill({
      userSkillID,
      userID,
      skillID,
      skillLevel,
      isTeachable,
      isLearnable
    });

    const insertedUserSkill = await userSkill.save();
    res.status(201).json(insertedUserSkill._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserSkills,
  addUserSkill
  //    getUserSkillsById,
  //    updateUserSkills,
  //    deleteUserSkills
};
