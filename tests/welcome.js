const dockerHost = require('docker-host')();

module.exports = {
  'Welcome Test' : function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 500)
      .assert.containsText('h1', 'Welcome')
      .end();
  }
};
