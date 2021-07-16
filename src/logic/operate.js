import Bigjs from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const num1 = new Bigjs(numberOne);
  const num2 = new Bigjs(numberTwo);

  switch (operation) {
    case '+':
      return (num1 + num2).toString();

    case '-':
      return (num1 - num2).toString();
    case '÷':
      return num2 === 0 ? 'division by zero' : (num1 / num2).toString();
    case 'X':
      return (num1 * num2).toString();
    default:
      return num1.toString();
  }
}
