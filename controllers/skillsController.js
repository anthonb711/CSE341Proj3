const getSkills = (req, res) => {
  // #swagger.tags = ['Skills']
  /* #swagger.security = [{
            "OAuth2": [
                'read'
                'write'
            ]
    }] */
  res.send('Hello from skills');
};

module.exports = { getSkills };
