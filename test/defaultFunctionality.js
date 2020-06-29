const {expect} = require('chai');

const selectorCnt = require('../data/selectors').counter;
const expectedCnt = require('../data/expected').defaultCounterFunctionality;
const inputNumber = require('../helpers/inputNumber');

describe('Default counter functionality', function () {

    it('TC-021 Subtract 1 gives -1', function () {
      browser.url('');
      const button = $$(selectorCnt.blackBtn)[0];
      button.click();
      const countValue = $(selectorCnt.countValue).getText();
      expect(countValue).eq(expectedCnt.countValueTC040);
    });

    it('TC-022 Add 3 gives 2', function () {
      const button = $$(selectorCnt.blackBtn)[5];
      button.click();
      const countValue = $(selectorCnt.countValue).getText();
      expect(countValue).eq(expectedCnt.countValueTC041);
    });

  it('TC-042 LLF accept 1', function () {
    inputNumber('left', expectedCnt.inputMin);
    const result = $(selectorCnt.errorMassage).isDisplayed();
    expect(result).eq(false);
  });

    it('TC-043 LLF accept 9', function () {
      inputNumber('right', expectedCnt.inputMax);
      const result = $(selectorCnt.errorMassage).isDisplayed();
      expect(result).eq(false);
    });

  /*
      it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
          browser.pause(1000);
          //inputNumber('left', expectedDCF.inputMin);
          inputNumber('right', expectedDCF.inputMin);
          const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
          expect(actual).eq(expectedDCF.countValueTC041);
      });
  */
});
