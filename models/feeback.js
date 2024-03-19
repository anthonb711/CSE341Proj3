const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  feedbackID: { type: Number, required: true, unique: true },
  sessionID: { type: Number, required: true },
  fromUserID: { type: Number, required: true },
  toUserID: { type: Number, required: true },
  rating: { type: Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], required: true },
  comment: { type: String, required: true },
  createAt: { type: Date, default: Date.now, timestamp: true, required: true }
});

const Feedback = mongoose.model('feedback', FeedbackSchema);

module.exports = Feedback;
