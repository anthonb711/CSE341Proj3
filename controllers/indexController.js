const getHome = (req, res) => {
  // #swagger.tags = ['Home']
  // #swagger.produces = ['text/html']
  if ((req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out') === 'Logged out') {
    res.send(
      `Hello from Index Controller! User is ${req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'}`
    );
  } else {
    res.send(
      `Hello from Index Controller! ${JSON.stringify(req.oidc.user.name)} is ${req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'}`
    );
  }
};

module.exports = { getHome };
