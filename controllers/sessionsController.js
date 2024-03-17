const getSessions = (req, res) => {
  // #swagger.tags = ['Sessions']
  /* #swagger.security = [{
            "OAuth2": [
                'read'
                'write'
            ]
    }] */
  res.send('Hello from sessions');
};

module.exports = { getSessions };
