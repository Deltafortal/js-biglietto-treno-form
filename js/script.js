console.log('JS OK');
// Definisci variabili

const button = document.getElementById('button');
const kmPrice = 0.21;
let sPrice;

// ! Validation

// Calcolo del prezzo


button.addEventListener('click', function(){

    const name = document.getElementById('name').value;
    let km = parseInt(document.getElementById('km').value);
    let age = document.getElementById('age').value;
    sPrice = km * kmPrice;
    let tPrice;

    if (age < 18) {
        tPrice = sPrice - (sPrice * 0.2);
        console.log(tPrice);
        } 
    else if (age > 64) {
        tPrice = sPrice - (sPrice * 0.4);
        console.log(tPrice);
    } else {
        tPrice = sPrice;
        }

    document.getElementById('namePlaceHolder').innerText = name;
    document.getElementById('kmPlaceHolder').innerText = km;
    document.getElementById('pricePlaceHolder').innerText = tPrice.toFixed(2);

})