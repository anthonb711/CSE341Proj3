const getSessions = (req, res) => {
  // #swagger.tags = ['User Profile']
  /* #swagger.security = [{
            "OAuth2": [
                'read'
                'write'
            ]
    }] */
  res.send('Hello from sessions');
};

module.exports = { getSessions };
