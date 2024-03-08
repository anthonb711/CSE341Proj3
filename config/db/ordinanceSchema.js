const mongoose = require('mongoose');

const ordinanceSchema = new mongoose.Schema({
  MRN: { type: Number, required: true },
  name: {
    type: String,
    enum: [
      'baptisim',
      'confirmation',
      'ordained elder',
      'endowment',
      'sealing',
      'patriachal blessing'
    ],
    required: true
  },
  performedBy: { type: Number, required: true },
  date: { type: Date, required: true }
});

const Ordinance = mongoose.model('Member', ordinanceSchema);

module.exports = Ordinance;
