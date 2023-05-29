console.log('JS OK');
// Definisci variabili

const button = document.getElementById('button');
const kmPrice = 0.21;
let km = parseInt(document.getElementById('km'));
const name = document.getElementById('name');
let age = document.getElementById('age');

// ! Validation

// Calcolo del prezzo


button.addEventListener('click', function(){

    let sPrice = km * kmPrice;
    document.getElementById('pricePlaceHolder').innerText = sPrice.toFixed(2);
})