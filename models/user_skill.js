const mongoose = require('mongoose');

const userSkillSchema = new mongoose.Schema({
  userSkillID: { type: Number, required: true, unique: true },
  userID: { type: Number, required: true },
  skillID: { type: Number, required: true },
  skillLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    lowercase: true,
    required: true
  },
  isTeachable: { type: String, enum: ['y', 'n'], lowercase: true, required: true },
  isLearnable: { type: String, enum: ['y', 'n'], lowercase: true, required: true }
});

const UserSkill = mongoose.model('user_skills', userSkillSchema);

module.exports = UserSkill;
