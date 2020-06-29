const selectorGen = require('../data/selectors').general;
const selectorCnt = require('../data/selectors').counter;
const expectedGen = require('../data/expected').general;
const expectedCnt = require('../data/expected').counter;

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
      const actual = $(selectorGen.header).isDisplayed();
      expect(actual).toEqual(true);
    });

    it('TC-003 Total Result', function () {
      const actual = $(selectorGen.totalResult).isDisplayed();
      expect(actual).toEqual(true);
    });

    it('TC-004 Add Name Field', () => {
      const actual = $(selectorGen.addNameField).isDisplayed();
      expect(actual).toEqual(true);
    });

    it('TC-005.1 Label for Add Name Field', function () {
      let actual = browser.$(selectorGen.addNameFieldLabelText).getText();
      expect(actual).toEqual('Enter Counter Title:');
    });

    //doesn't work
    it('TC-005.2 Label for Add Name Field', function () {
      const nameFieldLabels = $$(selectorGen.addNameFieldLabel);
      const actual = nameFieldLabels[nameFieldLabels.length-2].isDisplayed();
      //$$('label')[$$('label').length-2]
      expect(actual).toEqual(true);
    });

    it('TC-006 Default Value Field', function () {
      const actual = $(selectorGen.defaultValueField).isDisplayed();
      expect(actual).toEqual(true);
    });

    it('TC-007 Label for Default Value Field', function () {
      const defaultValue = $$(selectorGen.defaultValueFieldLabel);
      const actual = defaultValue[defaultValue.length-1].isDisplayed();
      expect(actual).toEqual(true);
    });

    it('TC-008 Add Counter', function () {
      const actual = $(selectorGen.addCounterBtn).isDisplayed();
      expect(actual).toEqual(true);
    });
  });

  describe('Elements value', function () {
    it('TC-009 Header = Counter', function () {
      const actual = $(selectorGen.header).getText();
      expect(actual).toEqual(expectedGen.header);
    });

    it('TC-010 Total Result = Total: 0', function () {
      const actual = $(selectorGen.totalResult).getText();
      expect(actual).toEqual(expectedGen.totalResult);
    });

    it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
      const nameFieldLabels = $$(selectorGen.addNameFieldLabel);
      const actual = nameFieldLabels[nameFieldLabels.length-2].getText();
      expect(actual).toEqual(expectedGen.addNameFieldLabel);
    });

    it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
      const actual = $(selectorGen.addNameField).getValue();
      expect(actual).toEqual(expectedGen.addNameField);
    });

    it('TC-013 Label for Default Value Field = Enter Initial Count:', function () {
      const defaultValue = $$(selectorGen.defaultValueFieldLabel);
      const actual = defaultValue[defaultValue.length-1].getText();
      expect(actual).toEqual(expectedGen.defaultValueFieldLabel);
    });

  });

});