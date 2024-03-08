const ObjectId = require('mongodb').ObjectId;
const Member = require('../config/db/memberSchema');

//GETTERS

const getMembers = async (req, res) => {
  // #swagger.tags = ['Members']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  try {
    const allMembers = await Member.find();
    res.status(200).json(allMembers);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMemberById = async (req, res) => {
  // #swagger.tags = ['Members']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const memberId = new ObjectId(req.params.id);
  try {
    const thisMember = await Member.findById(memberId);
    res.status(200).json(thisMember);
  } catch (error) {
    console.error('Error fetching member by ID:');
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POSTS
const addMember = async (req, res) => {
  // #swagger.tags = ['Members']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  try {
    const { lname, fname, gender, age, active, lastPrayer, lastTalk } = req.body;
    const member = new Member({
      lname,
      fname,
      gender,
      age,
      active,
      lastPrayer,
      lastTalk
    });

    const insertedMember = await member.save();
    res.status(201).json(insertedMember._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUTS

const updateMemberRecord = async (req, res) => {
  // #swagger.tags = ['Members']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const memberId = new ObjectId(req.params.id);
  console.log(req.params.id);
  try {
    const { lname, fname, gender, age, active, lastPrayer, lastTalk } = req.body;
    const memberUpdate = await Member.findOneAndUpdate(
      { _id: memberId },
      {
        lname,
        fname,
        gender,
        age,
        active,
        lastPrayer,
        lastTalk
      },
      { new: true }
    );
    if (!memberUpdate) {
      return res.status(404).json({ error: 'Member not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETES

const deleteMember = async (req, res) => {
  // #swagger.tags = ['Members']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const memberId = new ObjectId(req.params.id);

  try {
    await Member.deleteOne({ _id: memberId });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMembers,
  getMemberById,
  addMember,
  updateMemberRecord,
  deleteMember
};
