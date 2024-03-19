const ObjectId = require('mongodb').ObjectId;
const Skill = require('../models/skill');

/*************************************************************************
 *  GET SKILLS - HTTP:GET
 *************************************************************************/
const getSkills = async (req, res) => {
  // #swagger.tags = ['Skills']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const allSkills = await Skill.find();
    res.status(200).json(allSkills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/*************************************************************************
 *  ADD SKILL - HTTP:POST
 *************************************************************************/

/*************************************************************************
 *  GET SKILL BY ID - HTTP:GET
 *************************************************************************/

/*************************************************************************
 *  UPDATE SKILL BY ID - HTTP:PUT
 *************************************************************************/

/*************************************************************************
 *  DELETE SKILL BY ID - HTTP:DELETE
 *************************************************************************/

module.exports = {
  getSkills //,
  //addSkill,
  //getSkillById,
  //updateSkill,
  //deleteSkill
};
