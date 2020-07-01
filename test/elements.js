const {expect} = require('chai');
const selectorGen = require('../data/selectors').general;
const selectorCnt = require('../data/selectors').counter;
const expectedGen = require('../data/expected').general;
const expectedCnt = require('../data/expected').counter;

describe('Complex Counter App', function () {

  describe('Getting to the page', function () {

    it('TC-001 Page title is Complex Counter App', function () {
      browser.url('');
      const title = browser.getTitle();
      expect(title).eq('Complex Counter App');
    });

  });

  describe('Elements exist', function () {

    it('TC-002 Header', function () {
      const actual = $(selectorGen.header).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-003 Total Result', function () {
      const actual = $(selectorGen.totalResult).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-004 Add Name Field', () => {
      const actual = $(selectorGen.addNameField).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-005.1 Label for Add Name Field', function () {
      let actual = browser.$(selectorGen.addNameFieldLabelText).getText();
      expect(actual).eq('Enter Counter Title:');
    });

    it('TC-005.2 Label for Add Name Field', function () {
      const nameFieldLabels = $$(selectorGen.addNameFieldLabel);
      const actual = nameFieldLabels[nameFieldLabels.length-2].isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-006 Default Value Field', function () {
      const actual = $(selectorGen.defaultValueField).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-007 Label for Default Value Field', function () {
      const defaultValue = $$(selectorGen.defaultValueFieldLabel);
      const actual = defaultValue[defaultValue.length-1].isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-008 Add Counter', function () {
      const actual = $(selectorGen.addCounterBtn).isDisplayed();
      expect(actual).eq(true);
    });
  });

  describe('Elements value', function () {
    it('TC-009 Header = Counter', function () {
      const actual = $(selectorGen.header).getText();
      expect(actual).eq(expectedGen.header);
    });

    it('TC-010 Total Result = Total: 0', function () {
      const actual = $(selectorGen.totalResult).getText();
      expect(actual).eq(expectedGen.totalResult);
    });

    it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
      const nameFieldLabels = $$(selectorGen.addNameFieldLabel);
      const actual = nameFieldLabels[nameFieldLabels.length-2].getText();
      expect(actual).eq(expectedGen.addNameFieldLabel);
    });

    it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
      const actual = $(selectorGen.addNameField).getValue();
      expect(actual).eq(expectedGen.addNameField);
    });

    it('TC-013 Label for Default Value Field = Enter Initial Count:', function () {
      const defaultValue = $$(selectorGen.defaultValueFieldLabel);
      const actual = defaultValue[defaultValue.length-1].getText();
      expect(actual).eq(expectedGen.defaultValueFieldLabel);
    });

    it('TC-014 Placeholder for Default Value Field = 50', function () {
      const actual = $(selectorGen.defaultValueField).getValue();
      expect(actual).eq(expectedGen.defaultValueField);
    });

    it('TC-015 Add Counter = ADD COUNTER', function () {
      const actual = $(selectorGen.addCounterBtn).getText();
      expect(actual).eq(expectedGen.addCounterBtn);
    });
  });

  describe('Default Elements Counter exist', function () {
    it('TC-016 Counter Name', function () {
      const actual = $(selectorCnt.counterName).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-017 Count Value', function () {
      const actual = $(selectorCnt.countValue).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-018 LLF', function () {
      const actual = $(selectorCnt.lowerLimitField).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-019 ULF', function () {
      const actual = $(selectorCnt.upperLimitField).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-020, TC-021 Default Sub & Add Buttons', function () {
      const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
      expect(actual).eq(expectedCnt.defaultNumberBlackBtn);
    });

    it('TC-020, TC-021 Default Sub and Add Buttons', function () {
      const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
      expect(actual).eq(expectedCnt.defaultNumberBlackBtn);
    });

    it('TC-021 Label for Default Value Field', function () {
      const defaultValue = $$(selectorGen.defaultValueFieldLabel);
      const actual = defaultValue[defaultValue.length-1].isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-022 Delete button', function () {
      const actual = $(selectorCnt.deleteBtn).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-023 Reset button', function () {
      const actual = $(selectorCnt.resetBtn).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-024 Edit Name field', function () {
      const actual = $(selectorCnt.editNameField).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-025 Label for Edit Name field', function () {
      const actual = $(selectorCnt.editNameFieldLabel).isDisplayed();
      expect(actual).eq(true);
    });

    it('TC-026 input field for LLF present', () => {
      browser.$(selectorCnt.lowerLimitField).click();
      const actual = browser.$(selectorCnt.lowerInputField).isDisplayed();
      expect(actual).true;
    });

    it('TC-027 input field for ULF present', () => {
      browser.$(selectorCnt.upperLimitField).click();
      const actual = browser.$(selectorCnt.upperInputField).isDisplayed();
      expect(actual).true;
    });

    it('TC_028.1 default counter has name "1. Default Counter"', () => {
      const actual = browser.$$(selectorCnt.counterName)[1].getText();
      expect(actual).eq(expectedCnt.counterName);
    });

    it('TC_028.2 default counter has name "Default Counter"', () => {
      let counterName = browser.$('//h3[text()="Default Counter"]').getText();
      expect(/\d+\.\sDefault Counter/.test(counterName)).eq(true);
    });

    it('TC-029 Count Value has 0 by default', () => {
      browser.refresh();
      const actual = browser.$(selectorCnt.countValue).getText();
      expect(actual).eq(expectedCnt.countValue);
    });

    it('TC-030 LLF has text "CHANGE STEP OPTIONS?" by default', () => {
      const actual = browser.$(selectorCnt.lowerLimitField).getText();
      expect(actual).eq(expectedCnt.lowerLimitField);
    });

    it('TC-032 ULF has text "CHANGE STEP OPTIONS?" by default', () => {
      browser.refresh();
      const actual = browser.$(selectorCnt.upperLimitField).getText();
      expect(actual).eq(expectedCnt.upperLimitField);
    });

  });

  describe('Default Counter Elements value', function () {

    it('TC-031, 033 Default buttons = -1, -2, -3, 1, 2, 3', function () {
      const actual = $$(selectorCnt.blackBtn).map(el => el.getText());
      expect(actual).to.deep.equal(expectedCnt.blackBtn);
    });

    it('TC-034 DELETE button has text "DELETE"', () => {
      const actual = browser.$(selectorCnt.deleteBtn).getText();
      expect(actual).eq(expectedCnt.deleteBtn);
    });

    it('TC-035 RESET button has text "RESET"', () => {
      const actual = browser.$(selectorCnt.resetBtn).getText();
      expect(actual).eq(expectedCnt.resetBtn);
    });

    it('TC-036  Edit Counter Title has lable "Edit Counter Title"', () => {
      const actual = browser.$(selectorCnt.editNameFieldLabel).getText();
      expect(actual).eq(expectedCnt.editNameFieldLabel);
    });

    it('TC-037 Edit Name field has placeholder "Default Counter"', () => {
      const actual = browser.$(selectorCnt.editNameField).getValue();
      expect(actual).eq(expectedCnt.editNameField);
    });

    it('TC-038 LLF input has 1 by default', () => {
      browser.refresh();
      browser.$(selectorCnt.lowerLimitField).click();
     const actual = browser.$(selectorCnt.lowerInputField).getValue();
      expect(actual).eq(expectedCnt.lowerInputField);
    });

    it('TC-039 ULF input has 3 by default', () => {
      browser.refresh();
      browser.$(selectorCnt.upperLimitField).click();
      const actual = browser.$(selectorCnt.upperInputField).getValue();
      expect(actual).eq(expectedCnt.upperInputField);
    });
  });

});