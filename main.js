const randomNum= document.querySelector('#randomNum');

const minInput= document.querySelector('#lowLimit');
const maxInput= document.querySelector('#upLimit');

const generate=document.querySelector('#generateBtn');
const clear=document.querySelector('#clearBtn');


function generateRandom(){
    const minValue= Number(minInput.value );
    const maxValue= Number(maxInput.value);
    const random=Math.floor(Math.random()*(maxValue - minValue + 1) + minValue);
    if(minValue>maxValue || minInput.value==='' || maxInput.value===''){ 
        randomNum.innerText='invalid num'
    }else{
        randomNum.innerText=random;}
}

function clearRandom(){
    randomNum.innerText=' ';
    minInput.value='';
    maxInput.value='';
}

clear.addEventListener('click', clearRandom);