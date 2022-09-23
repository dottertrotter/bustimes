describe('Bus Routes Page', function() {
  it('The user is presented a list of routes', function(browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body')
      .assert.elementPresent("#routes-selector")
      .end();
  });
});

describe('Directions Page', function() {
  it('The user is presented a list of direction options', function(browser) {
    browser
      .url('http://localhost:3000/0/direction')
      .waitForElementVisible('body')
      .assert.elementPresent("#routes-selector")
      .assert.elementPresent("#directions-selector")
      .end();
  });
});


describe('Stops Page', function() {
  it('The user is presented a list of stops', function(browser) {
    browser
      .url('http://localhost:3000/0/direction/0/stop')
      .waitForElementVisible('body')
      .assert.elementPresent("#routes-selector")
      .assert.elementPresent("#directions-selector")
      .assert.elementPresent("#stops-selector")
      .end();
  });
});