const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
  availabilityID: { type: Number, required: true, unique: true },
  userID: { type: Number, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  isBooked: { type: String, enum: ['y', 'n'], lowercase: true, required: true }
});

const Availability = mongoose.model('availabilities', AvailabilitySchema);

module.exports = Availability;
