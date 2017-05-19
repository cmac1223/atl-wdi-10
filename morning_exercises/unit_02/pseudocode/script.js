//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas
//How much would it cost to sail straight around the earth's circumference, 
//assuming the Earth is rotating at 1000 mph, and assuming the eco-friendly 
//ship's fuel costs $3 per gallon, and the ship gets 12 miles to the gallon.
var shipFuelCost = function(fuelPrice, milesPerGallon){
  var speedPerHour = 1000;
  var milesPerGallon = 12;
  var earthCir = 24901;
  var fuelPrice = earthCir / milesPerGallon;
  return fuelPrice;
};

shipFuelCost(3,12);

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  var a = costcoj;
  var b = costcopj;
  var c = kj;
  var d = kpj;
  
  var totalAmountOfPureFruitJuiceCostco = a * b;
  var totalAmountOfPureFruitJuiceKirkland = 2 * .55;
  var sumOfCostcoandKirklandPureFruitJuice = (totalAmountOfPureFruitJuiceCostco + totalAmountOfPureFruitJuiceKirkland):
  var totalAmountOfJuice = 3 + 2;
  var calculateTotalPureJuice = ((sumOfCostcoandKirklandPureFruitJuice) / (totalAmountOfJuice));

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
