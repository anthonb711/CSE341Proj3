const ObjectId = require('mongodb').ObjectId;
const Family = require('../config/db/familySchema');

//GETTERS

const getFamilies = async (req, res) => {
  // #swagger.tags = ['Families']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  try {
    const allFamilies = await Family.find();
    res.status(200).json(allFamilies);
  } catch (error) {
    console.error('Error fetching Families:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFamilyById = async (req, res) => {
  // #swagger.tags = ['Families']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const FamilyId = new ObjectId(req.params.id);
  try {
    const thisFamily = await Family.findById(FamilyId);
    res.status(200).json(thisFamily);
  } catch (error) {
    console.error('Error fetching family by ID:');
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POSTS
const addFamily = async (req, res) => {
  // #swagger.tags = ['Families']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  try {
    const { headHousehold, spouse, children, marriageDate, sealingDate, temple } = req.body;
    const family = new Family({
      headHousehold,
      spouse,
      children,
      marriageDate,
      sealingDate,
      temple
    });

    const insertedFamily = await family.save();
    res.status(201).json(insertedFamily._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUTS

const updateFamily = async (req, res) => {
  // #swagger.tags = ['Families']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const familyId = new ObjectId(req.params.id);
  console.log(req.params.id);
  try {
    const { headHousehold, spouse, children, marriageDate, sealingDate, temple } = req.body;
    const familyUpdate = await Family.findOneAndUpdate(
      { _id: familyId },
      {
        headHousehold,
        spouse,
        children,
        marriageDate,
        sealingDate,
        temple
      },
      { new: true }
    );
    if (!familyUpdate) {
      return res.status(404).json({ error: 'Family not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETES

const deleteFamily = async (req, res) => {
  // #swagger.tags = ['Families']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const familyId = new ObjectId(req.params.id);

  try {
    await Family.deleteOne({ _id: familyId });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getFamilies,
  getFamilyById,
  addFamily,
  updateFamily,
  deleteFamily
};
