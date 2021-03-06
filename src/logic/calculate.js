import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;

  if (buttonName === '+/-') {
    if (next && next !== 0) {
      next *= -1;
      next = next.toString();
    } else {
      total *= -1;
      total = total.toString();
    }
  }
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName)) {
    if (!total) {
      total = buttonName;
    } else if (total && !operation) {
      total += buttonName;
    } else if (!next) {
      next = buttonName;
    } else if (operation && total) {
      next += buttonName;
    }
  }

  if (buttonName === '.') {
    if (next && !next.includes('.')) {
      next += '.';
    } else if (total && !total.includes('.')) {
      total += '.';
    }
  }
  if (['+', 'X', '/', '-'].includes(buttonName)) {
    if (!total) total = '0';
    if (total && !next) {
      operation = buttonName;
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = buttonName;
    }
  }
  if (buttonName === '=') {
    if (total && !next) {
      return total;
    }
    if (!total && !next) {
      total = '0';
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = buttonName;
    }
  }

  return { total, next, operation };
};

export default calculate;
