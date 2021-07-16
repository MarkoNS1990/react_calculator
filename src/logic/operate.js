import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);

  switch (operation) {
    case '+':
      return num1.plus(num2);

    case '-':
      return num1.minus(num2);

    case '/':
      return num2 !== '0' ? num1.div(num2) : 'ERROR can\'t divide by 0';
    case 'X':
      return num1.times(num2);
    default:
      return 'not valid operation';
  }
};

export default operate;
