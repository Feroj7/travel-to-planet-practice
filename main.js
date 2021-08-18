
// const marsPrice = 5000;
// const monPrice = 3000;

function updateNumber(planet, price, isIncreasing) {
    const planetInput = document.getElementById(planet + '-input');
    let planetNumber = planetInput.value;
    if(planetNumber == ''){
        return 0;
    }
    if (isIncreasing == true) {
        planetNumber = parseInt(planetNumber) + 1;
    }
    else if (planetNumber > 0) {
        planetNumber = parseInt(planetNumber) - 1;
    }
    planetInput.value = planetNumber;

    const planetTotal = document.getElementById(planet + '-total');
    // const planetValue = planetTotal.innerText;
    const planetCost = planetNumber * price;
    planetTotal.innerText = planetCost;

    calculate();

}

//calculate total cost
function calculate(){
    const marsCost = document.getElementById('mars-total').innerText;
    const moonCost = document.getElementById('moon-total').innerText;
    const totalCost = parseInt(marsCost) + parseInt(moonCost); 
    document.getElementById('total-cost').innerText = totalCost;
}

//mars quantity increasing or decreasing event
document.getElementById('mars-plus').addEventListener('click', function () {
    updateNumber('mars', 5000, true); 
})
document.getElementById('mars-minus').addEventListener('click', function () {
    updateNumber('mars', 5000, false);
})

//mars quantity increasing or decreasing event
document.getElementById('moon-plus').addEventListener('click', function () {
    updateNumber('moon', 3000, true);
})
document.getElementById('moon-minus').addEventListener('click', function () {
    updateNumber('moon', 3000, false);
})


