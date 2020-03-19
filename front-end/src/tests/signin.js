module.exports = {
    "get to login page": browser => {
        browser
      // Load the page at the launch URL
      .url(browser.launchUrl)
      // wait for page to load
      .waitForElementVisible(".navbar", 1000)
      // click on the login link
      .click('to="/admin/login"]');

    browser.assert.urlContains("login");
    },
    "logging in": browser => {},
    "logging out": browser => {},
    close: browser => {}
  };