const dockerHost = require('docker-host')();

module.exports = {
  'Welcome Test' : function (browser) {
    browser
      .url(dockerHost.protocol + dockerHost.host)
      .waitForElementVisible('body', 500)
      .assert.containsText('h1', 'Welcome')
      .end();
  }
};
