// const getProfile = (req, res) => {
//   // #swagger.tags = ['Profile']
//   /* #swagger.security = [{
//             "OAuth2": [
//                 'read'
//             ]
//     }] */
//   //res.send(JSON.stringify(req.oidc.user));
//   res.send("Hello from Profile Controller");
// };

// module.exports = { getProfile };

const db = require("../models/profile");
const User = db.user;

exports.createProfile = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

exports.getAll = (req, res) => {
  User.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.getProfile = (req, res) => {
  const username = req.params.username;
  User.find({ username: username })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};
