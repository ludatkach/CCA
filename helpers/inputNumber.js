const selectorCnt = require ('../data/selectors').counter;


function  inputNumber (str, value) {
  let limitFld = '';
  let inputFld = '';
  if (str === 'left') {
    limitFld = selectorCnt.lowerLimitField;
    inputFld = selectorCnt.lowerInputField;
  } else {
    limitFld = selectorCnt.upperLimitField;
    inputFld = selectorCnt.upperInputField;
  }

  if ($(limitFld).isDisplayed()) {
    $(limitFld).click();
  }
  $(inputFld).click();

  browser.keys(['Control', 'a']);
  browser.keys('Backspace');
  browser.keys(value);
}


module.exports = inputNumber;