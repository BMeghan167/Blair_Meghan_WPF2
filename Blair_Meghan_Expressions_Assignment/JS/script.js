//Meghan Blair
//April 9, 2015
//Expressions Assignment

fabricChoice = [4.98, 5.99, 8.73]

chiffonYards = prompt("How many yards of Chiffon do you want?");
cottonYards = prompt("How many yards of Cotton do you want?");
satinYards = prompt("How many yards of Satin do you want?");

chiffonTotal = fabricChoice[0] * chiffonYards
console.log("Your total for the amount of Chiffon you want is " + chiffonTotal + ".");
cottonTotal = fabricChoice[1] * cottonYards
console.log("Your total for the amount of Cotton you want is " + cottonTotal + ".");
satinTotal = fabricChoice[2] * satinYards
console.log("Your total for the amount of Satin you want is " + satinTotal + ".");

var finalTotal;
finalTotal += chiffonTotal, cottonTotal, satinTotal;
console.log("Your final total for all of your fabric is " + finalTotal + ".");
