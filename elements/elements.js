module.exports = {
  /*
  locateStrategy: async function (selector) {
return await selector.startsWith('/') ? 'xpath' : 'css selector';
},
*/
    url:'https://www.google.com',
    elements: {
      googleInputBox: {
        selector: 'input[type=text]'
      },
      searchButton: {
        selector: '//div[@class="VlcLAe"]//input[@name="btnK"]',
        locateStrategy: 'xpath'
      },
      headingText: {
        selector: `//div[contains(text(),'Nightwatch.js')]`,
        //'#main', 'Nightwatch.js'
        locateStrategy: 'xpath'
      }
    }
}
