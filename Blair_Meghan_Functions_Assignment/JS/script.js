//Meghan Blair
//April 23, 2015
//Functions Assignment

var bdayCake = prompt("How much are you spending on the birthday cake?"); //create a variable bdayCake to prompt the user on how much they are spending on the cake
var decorCost = prompt("How much are you spending on the decorations?"); //create a variable decorCost to prompt the user on how much they are spending on the decorations
var foodCost = prompt("How much did you spend on food?"); //create a variable to prompt the user on how much they are spending on the food
var pizzaNum = prompt("How many pizzas are you getting for the party?"); //create a variable to prompt the user on how many pizzas they are ordering
var peopleAmount = prompt("How many people are coming again?"); //create a variable to prompt the user on how many people are coming to the party

/*First we'll figure out how much it will cost for the three things the user is first prompted for*/

var total = supplyCost(Number(bdayCake), Number(decorCost), Number(foodCost)); //create a variable 'total' equal to the function name supplyCost, within the function name, set the arguments as the first three prompt variables

//function below will add the three arguments together as 'a', 'b', and 'c'
//return variable 'add'
function supplyCost(a, b, c){
    var add = a + b + c;
    return add;
}

//print answer using a string and the variable total
console.log("The total amount you are spending on the birthday cake, decorations and food is $" + total + ".");

//function below is an anonymous function under the variable 'pizzaPpl'
//the function below will multiply parameter 'c' by 8 and then divide by parameter 'd'
//function will return divide
var pizzaPpl = function(c, d){
    var divide = (c*8)/d;
    return divide;
}

//invokes function 'pizzaPpl' using variable 'totalSlices'
//this is where the arguments for 'pizzaPpl' is set
var totalSlices = pizzaPpl(pizzaNum, peopleAmount);

//print the answer using a string and the variable 'totalSlices'
console.log("Each person at the birthday party will have " + totalSlices + " slices of pizza.");

/*For my test run these are the values I entered for the prompts,
bdayCake = 20
decorCost = 15
foodCost = 40
pizzaNum = 4
peopleAmount = 16

The first answer I got printed like this, "The total amount you are spending on the birthday cake, decorations, and food is $75."

The second answer I got printed like this, "Each person at the birthday party will have 2 slices of pizza."

Both of these are correct so my code is working perfectly.
 */