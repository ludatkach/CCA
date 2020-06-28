const selectorGen = require('./../data/selectors');
const selectorCnt = require('./../data/expected');

describe('Complex Counter App', function () { //define suite title by passing a string

  describe('Getting to the page', function () { //define sub-suite title by passing a string

    it('TC-001 Page title is Complex Counter App', function () { //define test title by passing a string
      browser.url(''); //open baseUrl
      const title = browser.getTitle(); //get page title and assign it to the "title" variable
      browser.pause(2000); //just pause to visually see that something is happening on the page
      expect(title).toEqual('Complex Counter App'); //compare {title} (actual) and "Complex Counter App" (expected)
    });

  });

  describe('Elements exist', function () {

    it('TC-002 Header', function () {
      const actual = $(seleheader).isDisplayed();
      expect(actual).toEqual(true);
    });

    it('TC-003 Total Result', function () {
      const actual = $(general.totalResult).isDisplayed();
      expect(actual).toEqual(true);
    });

    it('TC-004 Add Name Field', () => {
      const actual = $(general.addNameField).isDisplayed();
      expect(actual).toEqual(true);
    });

    it('TC-005.1 Label for Add Name Field', function () {
      let actual = browser.$(general.addNameFieldLabelText).getText();
      expect(actual).toEqual('Enter Counter Title:');
    });

    //doesn't work
    it('TC-005.2 Label for Add Name Field', function () {
      const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].isDisplayed();
      //$$('label')[$$('label').length-2]
      expect(actual).toEqual(true);
    });

    it('TC-004 Counter Name', function () {
      const actual = $$(counter.header)[1].isDisplayed();
      expect(actual).toEqual(true);
    });

  });

});