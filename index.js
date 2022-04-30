//Elements
let meter_feet = document.getElementById('meter-feet');
let gallon_liter = document.getElementById('gallon-liter');
let pound_kilos = document.getElementById('pound-kilo');

//Value to be converted
let valueToConvert = document.getElementById('numberr');



function convertUnits (){
let num = valueToConvert.value;
//Convert Meter to feet
let meterFeet = ( num * 0.305).toFixed(3);
//Convert feet to meter
let feetMeter = (num * 3.28).toFixed(3);
//Convert liters to gallons
let literGallon = (num * 0.26417).toFixed(3);
//Convert gallons to liters
let gallonLiter = (num * 3.78541178).toFixed(3);
//Convert kilos to pounds
let kiloPound = Math.round(num * 2.205).toFixed(3);
//Convert pounds to kilos
let poundKilos = (num * 0.454).toFixed(3);

console.log(num);

meter_feet.textContent = `${valueToConvert.value} meters = ${meterFeet}
feet | ${valueToConvert.value} feet = ${feetMeter} meters`

gallon_liter.textContent = `${valueToConvert.value} liters = ${literGallon} gallons | ${valueToConvert.value} gallons = ${gallonLiter} liters`

pound_kilos.textContent = `${valueToConvert.value} kilos = ${kiloPound} pounds | ${valueToConvert.value} pounds = ${poundKilos} kilos`
}


