const getHome = (req, res) => {
  // #swagger.tags = ['Home']
  // #swagger.produces = ['text/html']

  //res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  res.send(`Heloo from Index Controller, User is ${(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')}`);
};

module.exports = { getHome };
