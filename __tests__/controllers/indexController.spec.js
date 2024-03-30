 
const { getHome } = require('../../controllers/indexController.js');

describe('indexController', () => {
  describe('getHome', () => {
    it('should send the correct response', () => {
      
      const req = {};
      const res = {
        send: jest.fn()
      };

      getHome(req, res);

      expect(res.send).toHaveBeenCalledWith('hello from Index Controller');
    });
  });
});
