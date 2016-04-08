const dockerHost = require('docker-host')();

module.exports = {
  'Welcome Test' : function (browser) {
    console.log(dockerHost.protocol + dockerHost.host, dockerHost);

    browser
      .url(dockerHost.protocol + dockerHost.host)
      .waitForElementVisible('body', 500)
      .assert.containsText('h1', 'Welcome')
      .end();
  }
};
