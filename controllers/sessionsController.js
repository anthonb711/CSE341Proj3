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

module.exports = {
  getSessions,
  addSession
  //getSessionById,
  //updateSession,
  //deleteSession,
};
/*
  "sessionID": "1",
  "tutuorUserID": "4",
  "learnerID": "2",
  "skillID": "1",
  "sessionTime": "2025",
  "teamsMeetingLink": "https://testmeeting"
}
*/
