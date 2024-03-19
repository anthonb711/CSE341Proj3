const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  sessionID: { type: Number, required: true, unique: true },
  tutorUserID: { type: Number, required: true },
  learnerID: { type: Number, required: true },
  skillID: { type: Number, required: true },
  sessionTime: { type: Date, required: true },
  teamsMeetingLink: { type: String, required: true }
});

const Session = mongoose.model('session', SessionSchema);

module.exports = Session;
