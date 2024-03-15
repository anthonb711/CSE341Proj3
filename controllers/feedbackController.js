const getFeedback = (req, res) => {
  // #swagger.tags = ['User Profile']
  /* #swagger.security = [{
            "OAuth2": [
                'read'
                'write'
            ]
    }] */
  res.send('Hello from feedback');
};

module.exports = { getFeedback };
