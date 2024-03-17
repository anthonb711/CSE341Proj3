const getFeedback = (req, res) => {
  // #swagger.tags = ['Feedback']
  /* #swagger.security = [{
            "OAuth2": [
                'read'
                'write'
            ]
    }] */
  res.send('Hello from feedback');
};

module.exports = { getFeedback };
