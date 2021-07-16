import bigjs from 'big.js';

export default function operate(numberOne,numberTwo,operation){
    const num1 = new bigjs(numberOne)
    const num2 = new bigjs(numberTwo)

    switch(operation){
        case '+':
            return (num1 + num2).toString()
            
        case '-':
            return (num1 - num2).toString()
        case '÷':
            return num2 === 0 ? 'division by zero' :(num1 / num2).toString()
        case 'X':
             return (num1 * num2).toString()        
    }
}