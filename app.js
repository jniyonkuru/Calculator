
 //Global variables
let number1;
let number2;
let result;
let operator;
const numberButton=document.createElement('button');
const buttonsNumber=document.querySelector('.buttons--number');
const buttonsOperator=document.querySelector('.buttons--operator');
const operatorButton=document.createElement('button');
const input=document.querySelector("#input");
// input field

input.setAttribute('readonly','readonly');

//operator button

operatorButton.style.width='70px';
operatorButton.style.height='48px';
operatorButton.style.border='solid #000 1px';
operatorButton.style.fontWeight='bold';
operatorButton.style.fontSize='24px';
operatorButton.setAttribute("class","operator");

//number button

numberButton.style.width='70px';
numberButton.style.height='70px';
numberButton.style.border='solid #000 1px';
numberButton.style.fontWeight='bold';
numberButton.style.fontSize='24px';
numberButton.setAttribute("class","number");

for(let i=0;i<12;i++){
    buttonsNumber.appendChild(numberButton.cloneNode(true));
}
for(let i=0;i<6;i++){
    buttonsOperator.appendChild(operatorButton.cloneNode(true));
}

const ArrayOperators=Array.from(document.querySelectorAll('.operator'))
const ArrayNumbers=Array.from(document.querySelectorAll('.number'));

for(let i=0;i<12;i++){
    ArrayNumbers[i].textContent=`${i+1}`;
    ArrayNumbers[i].value=`${i+1}`;
    if(i==9){
        ArrayNumbers[i].textContent='.';
        ArrayNumbers[i].value='.';}
    else if(i==10){
        ArrayNumbers[i].textContent='0';
        ArrayNumbers[i].value='0';
    }
    else if(i==11) {
            ArrayNumbers[i].textContent='=';
            ArrayNumbers[i].value='';}
    
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
ArrayOperators[4].textContent='C';
ArrayOperators[5].textContent='AC';


// add click eventListener to numberButtons
for(number of ArrayNumbers){
    number.addEventListener("click",function fillInput(e){
      input.setAttribute('value',`${input.value+this.value}`);
      if(this.value=='.'&&input.value.includes('.')){
        this.removeEventListener('click',fillInput);

      }
    });
    
}
//add click eventListener to operator buttons

for(operator of ArrayOperators){
    operator.addEventListener('click',function recordOperator(e){
        if(this.value&& input.value!=''){
            operator=this.value;
            number1=parseFloat(input.value);
            input.value=''; 
            console.log(number1);
        }
        
    })
}



