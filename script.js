let firstNumber=5;
let secondNumber=3;
let operator;

function add(firstNumber,secondNumber){
    return firstNumber+secondNumber;
}

function substract(firstNumber,secondNumber){
    return firstNumber-secondNumber;
}

function multiply(firstNumber,secondNumber){
    return firstNumber*secondNumber;    
}

function divide(firstNumber,secondNumber){
    return firstNumber/secondNumber;
}

function operate(firstNumber,secondNumber,operator){
    return operator(firstNumber,secondNumber);
}
console.log(add(3,6));
console.log(substract(9,3));
console.log(multiply(5,2));
console.log(divide(8,2));
console.log(operate(6,3,divide));

const screen=document.querySelector(".screen-child");

let numberElement=document.querySelectorAll(".number");
numberElement.forEach(element=>{
    element.addEventListener('click',(event) => {
    let number=document.createElement('p');
    
    number.textContent=element.textContent;  
        screen.appendChild(number);
        console.log(element.textContent);});
});

let addButton=document.querySelector(".add");
addButton.addEventListener('click',(evevnt)=>{
    operator=add;
});

let substractButton=document.querySelector(".substract");
substractButton.addEventListener('click',(evevnt)=>{
    operator=substract;
});

let multiplyButton=document.querySelector(".multiply");
multiplyButton.addEventListener('click',(evevnt)=>{
    operator=multiply;
});

let divideButton=document.querySelector(".divide");
divideButton.addEventListener('click',(evevnt)=>{
    operator=divide;
});

let operateButton=document.querySelector(".operate");
operateButton.addEventListener('click',(evevnt)=>{
    console.log(operate(firstNumber,secondNumber,operator));
});