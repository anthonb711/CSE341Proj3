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
const addSkill = async (req, res) => {
  // #swagger.tags = ['Skills']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const { skillID, skillName, category, description } = req.body;
    const skill = new Skill({
      skillID,
      skillName,
      category,
      description
    });

    const insertedSkill = await skill.save();
    res.status(201).json(insertedSkill._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*************************************************************************
 *  GET SKILL BY ID - HTTP:GET
 *************************************************************************/
const getSkillById = async (req, res) => {
  // #swagger.tags = ['Skills']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }

  const skillId = new ObjectId(req.params.id);

  try {
    const thisSkill = await Skill.findById(skillId);
    res.status(200).json(thisSkill);
  } catch (error) {
    console.error('Error fetching skill by ID:');
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/*************************************************************************
 *  UPDATE SKILL BY ID - HTTP:PUT
 *************************************************************************/
const updateSkill = async (req, res) => {
  // #swagger.tags = ['Skills']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }

  const skillId = new ObjectId(req.params.id);
  console.log(req.params.id);

  try {
    const { skillID, skillName, category, description } = req.body;
    const skillUpdate = await Skill.findOneAndUpdate(
      { _id: skillId },
      { skillID, skillName, category, description },
      { new: true }
    );

    if (!skillUpdate) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
/*************************************************************************
 *  DELETE SKILL BY ID - HTTP:DELETE
 *************************************************************************/

module.exports = {
  getSkills,
  addSkill,
  getSkillById,
  updateSkill
  //deleteSkill
};
