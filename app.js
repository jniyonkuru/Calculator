const numberButton=document.createElement('button');
const buttonsNumber=document.querySelector('.buttons--number');
const buttonsOperator=document.querySelector('.buttons--operator');
const operatorButton=document.createElement('button');

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
    if(i==9){
        ArrayNumbers[i].textContent='.';}
    else if(i==10){
        ArrayNumbers[i].textContent='0';}
    else if(i==11) {
            ArrayNumbers[i].textContent='=';}
    
}

ArrayOperators[0].textContent='+';
ArrayOperators[1].textContent='-';
ArrayOperators[2].textContent='*';
ArrayOperators[3].textContent='/';
ArrayOperators[4].textContent='C';
ArrayOperators[5].textContent='AC';



