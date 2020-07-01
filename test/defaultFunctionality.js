const {expect} = require('chai');

const selectorCnt = require('../data/selectors').counter;
const expectedDCF = require('../data/expected').defaultCounterFunctionality;

const inputNumber = require('../helpers/inputNumber');

describe('Default counter functionality', function () {

    it('TC-040 Subtract 1 gives -1', function () {
      browser.url('');
      const button = $$(selectorCnt.blackBtn)[0];
      button.click();
      const countValue = $(selectorCnt.countValue).getText();
      expect(countValue).eq(expectedDCF.countValue1neg);
    });

    it('TC-041 Add 3 gives 2', function () {
      const button = $$(selectorCnt.blackBtn)[5];
      button.click();
      const countValue = $(selectorCnt.countValue).getText();
      expect(countValue).eq(expectedDCF.countValue2pos);
    });

    it('TC-042 LLF accept 1', function () {
      inputNumber('left', expectedDCF.inputMin);
      const result = $(selectorCnt.errorMassage).isDisplayed();
      expect(result).eq(false);
    });

    it('TC-043 ULF accept 9', function () {
      inputNumber('right', expectedDCF.inputMax);
      const result = $(selectorCnt.errorMassage).isDisplayed();
      expect(result).eq(false);
    });

    it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
       inputNumber('right', expectedDCF.inputMin);
       inputNumber('left', expectedDCF.inputMin);
       const actual = ($$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length).toString();
       expect(actual).eq(expectedDCF.countValue2pos);
    });

    it('TC-045 ULF = 9 and LLF = 9 gives 2 black buttons', function () {
      inputNumber('right', expectedDCF.inputMax);
      inputNumber('left', expectedDCF.inputMax);
      const actual = ($$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length).toString();
      expect(actual).eq(expectedDCF.countValue2pos);
    });

    it('TC-046 RESET button works', () => {
      browser.refresh();
      const actual = browser.$(selectorCnt.countValue).getText();
      expect(actual).eq(expectedDCF.countValue);
    });

    it('TC-047 DELETE button works', ()=> {
      const actual = browser.$(selectorCnt.countValue);
      browser.$(selectorCnt.deleteBtn).click();
      expect(actual.isDisplayed()).eq(false);
    });
});
