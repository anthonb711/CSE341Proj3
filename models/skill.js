const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  skillID: { type: Number, required: true, unique: true },
  skillName: { type: String, required: true },
  skillID: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true }
});

const Skill = mongoose.model('skills', SkillSchema);

module.exports = UserSkill;
