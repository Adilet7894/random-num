const randomNum= document.querySelector('#randomNum');

const minInput= document.querySelector('#lowLimit');
const maxInput= document.querySelector('#upLimit');

const generate=document.querySelector('#generateBtn');
const clear=document.querySelector('#clearBtn');


function generateRandom(){
    const minValue= Number(minInput.value );
    const maxValue= Number(maxInput.value);
    const random=Math.floor(Math.random()*(maxValue - minValue + 1) + minValue);
    randomNum.innerText=random;
}

function clearRandom(){
    randomNum.innerText=' ';
}

clear.addEventListener('click', clearRandom);