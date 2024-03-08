const ObjectId = require('mongodb').ObjectId;
const Ordinance = require('../config/db/memberSchema');

//GETTERS

const getOrdinances = async (req, res) => {
  // #swagger.tags = ['Ordinances']
  /* #swagger.security = [{
            "OAuth2": [
                'read' 
                'write'
            ]
    }] */
  try {
    const allOrdinances = await Ordinance.find();
    res.status(200).json(allOrdinances);
  } catch (error) {
    console.error('Error fetching Ordinances:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOrdinanceById = async (req, res) => {
  // #swagger.tags = ['Ordinances']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const ordinanceId = new ObjectId(req.params.id);
  try {
    const thisOrdinance = await Ordinance.findById(ordinanceId);
    res.status(200).json(thisOrdinance);
  } catch (error) {
    console.error('Error fetching ordinance by ID:');
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POSTS
const addOrdinance = async (req, res) => {
  // #swagger.tags = ['Ordinances']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  try {
    const { MRN, name, performedBy, date } = req.body;
    const ordinance = new Ordinance({
      MRN,
      name,
      performedBy,
      date
    });

    const insertedOrdinance = await ordinance.save();
    res.status(201).json(insertedOrdinance._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUTS

const updateOrdinance = async (req, res) => {
  // #swagger.tags = ['Ordinances']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const ordinanceId = new ObjectId(req.params.id);
  console.log(req.params.id);
  try {
    const { MRN, name, performedBy, date } = req.body;
    const ordinanceUpdate = await Ordinance.findOneAndUpdate(
      { _id: ordinanceId },
      {
        MRN,
        name,
        performedBy,
        date
      },
      { new: true }
    );
    if (!ordinanceUpdate) {
      return res.status(404).json({ error: 'Ordinance not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETES

const deleteOrdinance = async (req, res) => {
  // #swagger.tags = ['Ordinances']
  /* #swagger.security = [{
            "OAuth2": [
                'read', 
                'write'
            ]
    }] */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }
  const ordinanceId = new ObjectId(req.params.id);

  try {
    await Ordinance.deleteOne({ _id: ordinanceId });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getOrdinances,
  getOrdinanceById,
  addOrdinance,
  updateOrdinance,
  deleteOrdinance
};
