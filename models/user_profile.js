const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userID: { type: Number, required: true},
  firstName: { type: String},
  lastName: { type: String },
  teamsID: { type: String},
  email: {
    type: String,
    validate: {
      validator: (v) => {
        return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(v);
      },
      message: (props) => `${props.value} is not a valide email address`
    },
    required: true 
  }
});



const UserProfile = mongoose.model('user_profile', userProfileSchema);


module.exports = UserProfile;
