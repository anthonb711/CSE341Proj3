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

/************************************************************************
 *  GET USER SKILL BY ID - HTTP:GET
 *************************************************************************/
const getUserSkillsById = async (req, res) => {
  // #swagger.tags = ['User Skills']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const userSkillId = new ObjectId(req.params.id);
  try {
    const thisUserSkill = await UserSkill.findById(userSkillId);
    res.status(200).json(thisUserSkill);
  } catch (error) {
    console.error('Error fetching user skill by ID:');
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/************************************************************************
 *  UPDATE USER SKILL BY ID - HTTP:PUT
 *************************************************************************/
const updateUserSkills = async (req, res) => {
  // #swagger.tags = ['User Skills']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }

  const userSkillId = new ObjectId(req.params.id);
  console.log(req.params.id);

  try {
    const { userSkillID, userID, skillID, skillLevel, isTeachable, isLearnable } = req.body;

    const userSkillUpdate = await UserSkill.findOneAndUpdate(
      { _id: userSkillId },
      { userSkillID, userID, skillID, skillLevel, isTeachable, isLearnable },
      { new: true }
    );

    if (!userSkillUpdate) {
      return res.status(404).json({ error: 'User skill not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserSkills,
  addUserSkill,
  getUserSkillsById,
  updateUserSkills
  //    deleteUserSkills
};
