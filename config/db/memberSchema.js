const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  lname: { type: String, required: true },
  fname: { type: String, required: true },
  gender: { type: String, enum: ['M', 'F'], required: true },
  age: { type: Number, required: true, min: 0, max: 120 },
  active: { type: String, enum: ['Y', 'N'], required: true },
  lastPrayer: { type: Date, default: null },
  lastTalk: { type: Date, default: null }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
