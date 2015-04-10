//Meghan Blair
//April 9, 2015
//Expressions Assignment

fabricChoice = [4.98, 5.99, 8.73] //this line creates the array containing how much each fabric costs

chiffonYards = prompt("How many yards of Chiffon do you want?"); //prompt the user on how many yards of chiffon they want
cottonYards = prompt("How many yards of Cotton do you want?"); //prompt the user on how many yards of cotton they want
satinYards = prompt("How many yards of Satin do you want?"); //prompt the user on how many yards of satin they want

chiffonTotal = fabricChoice[0] * chiffonYards //multiply array 0 by the first user prompt
console.log("Your total for the amount of Chiffon you want is " + Math.round(chiffonTotal) + " dollars."); //print the answer using a string
cottonTotal = fabricChoice[1] * cottonYards //multiply array 1 by the second user prompt
console.log("Your total for the amount of Cotton you want is " + Math.round(cottonTotal) + " dollars."); //print the answer to the console
satinTotal = fabricChoice[2] * satinYards //multiply array 2 by the third user prompt
console.log("Your total for the amount of Satin you want is " + Math.round(satinTotal) + " dollars."); //print the answer to the console using a string


finalTotal = chiffonTotal + cottonTotal + satinTotal; //add three variables to get the new variable finalTotal
console.log("Your final total for all of your fabric is " + Math.round(finalTotal) + " dollars."); //print finalTotal to the console using a string

/*I entered 5 as my first value, 4 for my second value, and 2 for the third. My answer for chiffonTotal was 25 dollars. My answer for cottonTotal was 24 dollars and my answer for satinTotal was 17 dollars. My answer for finalTotal was 66 dollars.*/
