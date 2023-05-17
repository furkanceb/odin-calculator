let firstNumber;
let secondNumber;
let operator;

function add(num1,num2){
    return num1+num2;
}

function substract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;    
}

function divide(num1,num2){
    return num1/num2;
}

function operate(num1,num2,operater){
    return operater(num1,num2);
}
console.log(add(3,6));
console.log(substract(9,3));
console.log(multiply(5,2));
console.log(divide(8,2));
console.log(operate(6,3,divide));