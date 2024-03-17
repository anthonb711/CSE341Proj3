const getUserSkills = (req, res) => {
  // #swagger.tags = ['User Skills']
  /* #swagger.security = [{
            "OAuth2": [
                'read'
                'write'
            ]
    }] */
  res.send('Hello from user_skills');
};

module.exports = { getUserSkills };
