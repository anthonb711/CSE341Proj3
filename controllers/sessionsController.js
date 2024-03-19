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

module.exports = {
  getSessions
  //addSession,
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
