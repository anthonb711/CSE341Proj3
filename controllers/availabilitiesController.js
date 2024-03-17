const getAvailabilities = (req, res) => {
  // #swagger.tags = ['Availabilities']
  /* #swagger.security = [{
            "OAuth2": [
                'read'
                'write'
            ]
    }] */
  res.send('Hello from availabilities');
};

module.exports = { getAvailabilities };
