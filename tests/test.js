module.exports = {
    'step one: navigate to google' : function (browser) { //step one
      // browser
      //   .url('https://www.google.com') //without POM
      var google = browser.page.elements();// page/elements path to POM

    google.navigate()
        .waitForElementVisible('body', 1000)
        .setValue('@googleInputBox', 'nightwatch')
        //.setValue('input[type=text]', 'nightwatch')
        //.waitForElementVisible('input[name=btnK]', 1000) //CSS selector by default
        //.useXpath()
        //.waitForElementVisible('//div[@class="VlcLAe"]//input[@name="btnK"]', 1000)
        .waitForElementVisible('@searchButton', 1000)
    },

    'step two: click input' : function (browser) { //step two
      var google = browser.page.elements();
      google
      //browser
        //.click('input[name=btnK]')
        //.useXpath()
        //.click('//div[@class="VlcLAe"]//input[@name="btnK"]')
        .click('@searchButton')
        .pause(1000)
        //.useCss() //switch to CSS selector
        .assert.containsText('@headingText', 'Nightwatch.js')
        .end(); //to close the browser session after all the steps
    }
  };
