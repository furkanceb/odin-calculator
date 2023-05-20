let firstNumber=0;
let secondNumber;
let operator;
let operatorIsClicked=false;
let firstSmallNumber=0;
let secondSmallNumber=0;
let result;
let operaterClickCounter=0;

let resultElement=document.createElement("p");
resultElement.textContent=0;

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
    return Math.round(firstNumber/secondNumber*100)/100;
}

function operate(firstNumber,secondNumber,operator){
    return operator(firstNumber,secondNumber);
}

//Display zero as inital value
const screen=document.querySelector(".screen-child");
screen.appendChild(resultElement);

//any operator clicked
let operation=document.querySelectorAll(".operator");
operation.forEach(element =>{
    element.addEventListener('click',()=>{
        operatorIsClicked=true;
        console.log("operatore basıldı")
        let operatorElement=document.createElement('p');
        operatorElement.id="operatorElement";
        operatorElement.textContent=element.textContent;
        
        //Change the operator if multiple operators are entered in a row
        if(operaterClickCounter>0){
            screen.replaceChild(operatorElement,screen.lastChild);
        }
        else{
            screen.appendChild(operatorElement);
        }
        operaterClickCounter++;
        
    } 
    );
});


let numberElement=document.querySelectorAll(".number");
numberElement.forEach(element=>{
    //click number buttons
    element.addEventListener('click',(event) => {
    let number=document.createElement('p');
    number.textContent=element.textContent;
    
    screen.appendChild(number);
    
    //display numbers
    if(!operatorIsClicked && firstNumber!==result){
        if(screen.contains(resultElement)){
            screen.removeChild(resultElement);}
        console.log("operatore basılmadı")
        let firstBigNumber=number.textContent;
        firstNumber=Number(firstSmallNumber+firstBigNumber);
        console.log("realNumber:",firstNumber);
        console.log("smallNumber:",firstSmallNumber);
        console.log("bigNumber",firstBigNumber);
        firstSmallNumber=firstNumber;}
     
    else{
        console.log("equal operatore basılmadı")
        let secondBigNumber=number.textContent;
        secondNumber=Number(secondSmallNumber+secondBigNumber);
        console.log("realNumber:",secondNumber);
        console.log("smallNumber:",secondSmallNumber);
        console.log("bigNumber",secondBigNumber);
        secondSmallNumber=secondNumber;
    }    
    });
    
});



let addButton=document.querySelector(".add");
addButton.addEventListener('click',(event)=>{
    operator=add;

});

let substractButton=document.querySelector(".substract");
substractButton.addEventListener('click',(event)=>{
    operator=substract;
});

let multiplyButton=document.querySelector(".multiply");
multiplyButton.addEventListener('click',(event)=>{
    operator=multiply;
});

let divideButton=document.querySelector(".divide");
divideButton.addEventListener('click',(event)=>{
    operator=divide;
});

let operateButton=document.querySelector(".operate");
operateButton.addEventListener('click',(event)=>{
    if (!operator) {
        console.error("Operator is missing!");
        return; // Stop execution if operator is missing
      }
   
    if(secondNumber!==undefined){ //Do the operation only if the second number enterd
    console.log(operate(firstNumber,secondNumber,operator));
    result=operate(firstNumber,secondNumber,operator);
    resultElement.textContent=result;
    operatorIsClicked=false;
    firstNumber=result;
    secondNumber=undefined;
    firstSmallNumber=0;
    secondSmallNumber=0;
    screen.replaceChildren(resultElement);
    operaterClickCounter=0;
    }
    
    else{
        alert("Waiting for the second number!");
    }
});

function allClear(){
    firstNumber=0;
    secondNumber;
    operator=null;
    operatorIsClicked=false;
    firstSmallNumber=0;
    secondSmallNumber=0;
    result=null;
    resultElement.textContent=0;
    screen.replaceChildren(resultElement);
    operaterClickCounter=0;
}

let allClearButton=document.querySelector(".all-clear");
allClearButton.addEventListener('click',()=>{
    allClear();
});


