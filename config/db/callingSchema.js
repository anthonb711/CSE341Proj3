const mongoose = require('mongoose');

const callingSchema = new mongoose.Schema({

  permission: { type: String, enum: [ 'members', 'callings', 'families', 'ordinances', 'user'], required: true }
});

const Calling = mongoose.model('Member', memberSchema);

module.exports = Calling;
