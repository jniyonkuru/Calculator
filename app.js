
 //Global variables
let number1;
let number2;
let result;
let operator=null;
const numberButton=document.createElement('button');
const buttonsNumber=document.querySelector('.buttons--number');
const buttonsOperator=document.querySelector('.buttons--operator');
const operatorButton=document.createElement('button');
const input=document.querySelector("#input");
const clearButton=document.createElement('button');
const deleteButton=document.createElement('button');
const dotButton=document.createElement('button');
const equalButton=document.createElement('button');
// input field

input.setAttribute('readonly','readonly');

//operator button

operatorButton.setAttribute("class","operator button");
clearButton.setAttribute("class"," operator clear");
deleteButton.setAttribute("class","operator delete");
clearButton.innerText='AC';
deleteButton.textContent='C';

//number button
numberButton.setAttribute("class","number button");

//dotButton
dotButton.textContent='.';
dotButton.setAttribute('class','dot button');

//equalButton
equalButton.textContent='=';
equalButton.setAttribute('class','equate button');


for(let i=0;i<10;i++){
    buttonsNumber.appendChild(numberButton.cloneNode(true));
}
buttonsNumber.appendChild(dotButton);
buttonsNumber.appendChild(equalButton);
for(let i=0;i<4;i++){
    buttonsOperator.appendChild(operatorButton.cloneNode(true));
}
buttonsOperator.appendChild(deleteButton);
buttonsOperator.appendChild(clearButton);

const ArrayOperators=Array.from(document.querySelectorAll('.operator.button'))
const ArrayNumbers=Array.from(document.querySelectorAll('.number'));

for(let i=0;i<10;i++){
    ArrayNumbers[i].textContent=`${i+1}`;
    ArrayNumbers[i].value=`${i+1}`;
 if(i==9){
        ArrayNumbers[i].textContent='0';
        ArrayNumbers[i].value='0';
    } 
}
//operator values

ArrayOperators[0].textContent='+';
ArrayOperators[0].value='+';
ArrayOperators[1].textContent='-';
ArrayOperators[1].value='-';
ArrayOperators[2].textContent='x';
ArrayOperators[2].value='x';
ArrayOperators[3].innerHTML='&divide;';
ArrayOperators[3].value='/';


// add click eventListener to numberButtons
for(number of ArrayNumbers){
    number.addEventListener("click",function fillInput(e){
      input.value +=e.target.value;
    });
    
}
//add click eventListener to operator buttons

for(operator of ArrayOperators){
    operator.addEventListener('click',function recordOperator(e){
            operator=this.value;
            number1=parseFloat(input.value);
            input.value='';
    })
}

equalButton.addEventListener('click',operate);

//Define operations

// Addition function

function add(number1,number2){

    return number1+number2;
}

//subtraction

function subtract (number1,number2){
    return number1-number2;
}
//multiplication
function multiply(number1,number2){
    return number1*number2;
}
//division

function divide(number1,number2){
    return number1/number2;
}

function operate(){
    number2=parseFloat(input.value);
    if(number1==undefined||number2==undefined ||isNaN(parseFloat(input.value))){
       return;
    }

    console.log(operator);
    
 switch(operator){
     case'+':
     result= add(number1,number2);
     break;
     case'x':
     result= multiply(number1,number2);
     break;
     case'/':
     result= divide(number1,number2);
     break;
     case'-':
     result= subtract(number1,number2);
     break;
     default:
        return;
     
 }
 input.value=result.toString();
 number1=result;
 
}
clearButton.addEventListener('click',function(e){
    input.value='';
})
deleteButton.addEventListener('click',function(e){
    let string1=input.value.slice(0,-1);
    input.value=string1;
})
dotButton.addEventListener('click',function(e){
    if(!input.value.includes('.')){
        input.value+='.';
    }
})

