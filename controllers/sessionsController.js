const ObjectId = require('mongodb').ObjectId;
const Session = require('../models/session');

/************************************************************************
 *  GET SESSIONS - HTTP:GET
 *************************************************************************/
const getSessions = async (req, res) => {
  // #swagger.tags = ['Sessions']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const allSessions = await Session.find();
    res.status(200).json(allSessions);
  } catch (error) {
    console.error('Error fetching sessions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/************************************************************************
 *  ADD USER PROFILE - HTTP:POST
 *************************************************************************/
const addSession = async (req, res) => {
  // #swagger.tags = ['Sessions']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  try {
    const { sessionID, tutorID, learnerID, skillID, sessionTime, teamsMeetingLink } = req.body;
    const session = new Session({
      sessionID,
      tutorID,
      learnerID,
      skillID,
      sessionTime,
      teamsMeetingLink
    });

    const insertedSession = await session.save();
    res.status(201).json(insertedSession._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/************************************************************************
 *  GET SESSION BY ID - HTTP:GET
 *************************************************************************/
const getSessionById = async (req, res) => {
  // #swagger.tags = ['Sessions']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }

  const sessionId = new ObjectId(req.params.id);

  try {
    const thisSession = await Session.findById(sessionId);
    res.status(200).json(thisSession);
  } catch (error) {
    console.error('Error fetching session by ID:');
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/************************************************************************
 *  UPDATE SESSION BY ID - HTTP:PUT
 *************************************************************************/
const updateSession = async (req, res) => {
  // #swagger.tags = ['Sessions']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }

  const sessionId = new ObjectId(req.params.id);
  console.log(req.params.id);

  try {
    const { sessionID, tutorID, learnerID, skillID, sessionTime, teamsMeetingLink } = req.body;
    const sessionUpdate = await Session.findOneAndUpdate(
      { _id: sessionId },
      { sessionID, tutorID, learnerID, skillID, sessionTime, teamsMeetingLink },
      { new: true }
    );

    if (!sessionUpdate) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/************************************************************************
 *  DELETE SESSION BY ID - HTTP:DELETE
 *************************************************************************/
const deleteSession = async (req, res) => {
  // #swagger.tags = ['Sessions']
  //#swagger.security = [{"OAuth2": ['read', 'write']}]

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Invalid ID');
  }

  const sessionId = new ObjectId(req.params.id);

  try {
    await Session.deleteOne({ _id: sessionId });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSessions,
  addSession,
  getSessionById,
  updateSession,
  deleteSession
};
