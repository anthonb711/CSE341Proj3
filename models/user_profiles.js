const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userID: { type: NUMBER, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  teamsID: { type: String, required: true },
  email: { type: String,
                validate: {
                    validator: (v) => {
                        return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(v);
                    },
                    message: props => `${props.value} is not a valide email address`
                },
                required: [true, 'Valid email required']
        }
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
