const { getHome } = require('../../controllers/indexController.js');

describe('indexController', () => {
  describe('getHome', () => {


    it('should send the correct response when authenticated', () => {
      const req = {
        oidc: {
          isAuthenticated: jest.fn().mockReturnValue(true),
          user: { name: 'Test User' }
        }
      };

      const res = {
        send: jest.fn()
      };

      const next = jest.fn();

      getHome(req, res, next);

      expect(req.oidc.isAuthenticated).toHaveBeenCalled();

      expect(res.send).toHaveBeenCalledWith(`Hello from Index Controller! "${req.oidc.user.name}" is Logged in`);

    });

    it('should send the correct response when not authenticated', () => {
      const req = {
        oidc: {
          isAuthenticated: jest.fn().mockReturnValue(false)
        }
      };


      const res = {
        send: jest.fn()
      };

      const next = jest.fn();

      getHome(req, res, next);

      expect(req.oidc.isAuthenticated).toHaveBeenCalled();

      expect(res.send).toHaveBeenCalledWith('Hello from Index Controller! User is Logged out');
    });
  });
});
