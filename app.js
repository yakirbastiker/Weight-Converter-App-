let output = document.getElementById('output');
output.style.visibility = 'hidden';  // for the start

// for cards res
let gr = document.getElementById('gramsOutput');
let kg = document.getElementById('kgOutput');
let oz = document.getElementById('ozOutput');
let po = document.getElementById('poOutput');
/////
let x = document.getElementById("u-selctor"); // for options


document.getElementById('lbsInput').addEventListener('input', function(e){

    let selectUnit = x.options[x.selectedIndex].value;  //get selected value
    let lbs = e.target.value; // get value from input
    output.style.visibility = 'visible'; // show all cards

    //select card 
    let cardPO = document.querySelector('.card-po');
    let cardGR = document.querySelector('.card-gr');
    let cardKG = document.querySelector('.card-kg');
    let cardOZ = document.querySelector('.card-oz');

    cardPO.classList.remove('none');
    cardGR.classList.remove('none');
    cardKG.classList.remove('none');
    cardOZ.classList.remove('none');


    if (selectUnit === 'pounds') {

        cardPO.classList.add('none');

        gr.innerHTML = lbs/0.0022046;
        kg.innerHTML = lbs/2.2046;
        oz.innerHTML = lbs*16;

    } else if(selectUnit === 'grams') {
        cardGR.classList.add('none');

        kg.innerHTML = lbs/1000;
        oz.innerHTML = lbs*0.035274;
        po.innerHTML = lbs*0.00220462;

    } else if(selectUnit === 'killograms') {
        cardKG.classList.add('none');

        gr.innerHTML = lbs*1000;
        oz.innerHTML = lbs*35.274;
        po.innerHTML = lbs*2.20462;


    } else if(selectUnit === 'ounces') {
        cardOZ.classList.add('none');

        gr.innerHTML = lbs*28.3495;
        kg.innerHTML = lbs*0.0283495;
        po.innerHTML = lbs*0.0625;

    }

})


