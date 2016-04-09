const dockerHost = require('docker-host')();

module.exports = {
  'Welcome Test' : function (browser) {
    browser
      .url('http://0.0.0.0:80')
      .waitForElementVisible('body', 500)
      .assert.containsText('h1', 'Welcome')
      .end();
  }
};
