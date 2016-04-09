const dockerHost = require('docker-host')();

module.exports = {
  'Welcome Test' : function (browser) {

    console.log(browser.launch_url);

    browser
      .url("http://localhost")
      .waitForElementVisible('body', 500)
      .assert.containsText('h1', 'Welcome')
      .end();
  }
};
