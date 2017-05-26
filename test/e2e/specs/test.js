// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 5)
      .waitForElementVisible('a[name=gpa]', 1000)
      .click('a[name=gpa]')
      .pause(1000)
      // .assert.containsText('#main', 'Night Watch')
      .end();
  }
}
