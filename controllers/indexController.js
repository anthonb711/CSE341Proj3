const getHome = (req, res) => {
  // #swagger.tags = ['Home']
  // #swagger.produces = ['text/html']

  //res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  res.send('hello from Index Controller');
};

module.exports = { getHome };
