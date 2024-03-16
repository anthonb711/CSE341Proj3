const getProfile = (req, res) => {
  // #swagger.tags = ['User Profile']
  /* #swagger.security = [{
            "OAuth2": [
                'read'
                'write'
            ]
    }] */
  res.send('Hello from user_profile');
};

module.exports = { getProfile };
