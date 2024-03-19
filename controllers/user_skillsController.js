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

module.exports = {
  getUserSkills //,
  //    addUserSkills,
  //    getUserSkillsById,
  //    updateUserSkills,
  //    deleteUserSkills
};

/*
 addUserSkills,
    getUserSkillsById,
    updateUserSkills,
    deleteUserSkills
*/
