//Meghan Blair
//April 23, 2015
//Functions Assignment

var bdayCake = prompt("How much are you spending on the birthday cake?");
var decorCost = prompt("How much are you spending on the decorations?");
var foodCost = prompt("How much did you spend on food?");
var pizzaNum = prompt("How many pizzas are you getting for the party?");
var peopleAmount = prompt("How many people are coming again?");

/*First we'll figure out how much it will cost for the three things the user is first prompted for*/

var total = supplyCost(bdayCake, decorCost, foodCost);

function supplyCost(a, b, c){
    var add = a + b + c;
    return add;
}

console.log("The total amount you are spending on the birthday cake, decorations and food is " + total + " .");

