const APP = require('../server');

describe('Express has initlaized an instance of app', () => {
  //test stuff
  test('Event count should be 1', () => {
    //Define inputs and expected output give said inputs
    const input = 1;

    // The "expect() is the actual test"
    expect(input).toEqual(APP._eventsCount);
  });
});
