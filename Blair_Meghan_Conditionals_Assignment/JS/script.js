//Meghan Blair
//April 16, 2015
//Conditionals Assignment

var songCost = 1.27; //create a variable 'songCost' equal to 1.27 to represent the cost of each song in itunes
var albumCost = 9.99; //create a variable 'albumCost' equal to 9.99 to represent the cost of each album
var appCost = 2.99; //create a variable 'appCost' equal to 2.99 to represent the cost of each app
var moneyLeft = 30; //create a variable 'moneyLeft' equal to 30 to represent the amount of money is left from your last paycheck that you are able to spend on music and apps
var iphoneSpace = true; //create a variable 'iphoneSpace' equal to true to represent you have enough space on your iphone

var songAmount = prompt("How many songs would you like to purchase from iTunes?"); //create a variable 'songAmount' equal to a prompt that will ask how many songs the user will purchase
var albumAmount = prompt("How many albums would you like to purchase from iTunes?"); //create a variable equal to a prompt that will ask the user how many albums they want
var appAmount = prompt("How many albums would you like to purchase from the App store?"); //create a variable equal to a prompt asking the user how many apps they will buy

//the conditional below is an if statement that will validate the prompt under the variable 'songAmount'
if (songAmount === ""){
    prompt("You didn't tell me how many songs you wanted to buy!");
}else{
    console.log("Good job, you already told me how many songs you want!");
}

//the conditional below will validate the prompt under the 'albumAmount' variable using an if statement
if (albumAmount === ""){
    prompt("You forgot to tell me how many albums you want to purchase!");
}else{
    console.log("Great! I have the amount of albums you want to buy!");
}

//the conditional below is an if statement that will validate the prompt under the variable 'appAmount'
if (appAmount === ""){
    prompt("Hold up! You didn't tell me how many apps you want to get!");
}else{
    console.log("Yay! I have the amount of apps you want to purchase!");
}

var songTotal = songCost * songAmount; //create a variable 'songTotal' by multiplying 'songCost' and 'songAmount'
var albumTotal = albumCost * albumAmount; //create a variable 'albumTotal' by multiplying 'albumCost' and 'albumAmount'
var appTotal = appCost * appAmount; //create a variable 'appTotal' by multiplying 'appCost' and 'appAmount'
var musicTotal = songTotal + albumTotal; //create a variable 'musicTotal' by adding 'songTotal' and 'albumTotal'

//the conditional below is an else if statement that will determine if the user has enough money for the music, if not then it will determine if there is enough for the apps, otherwise it will print, "Sorry but you don't have enough money..."
if (musicTotal <= moneyLeft){
    console.log("You can buy all the music you want!");
}else if(appTotal <= moneyLeft){
    console.log("You can buy all of the new apps!");
}else{
    console.log("Sorry but you don't have enough money...");
}

var finalTotal = musicTotal + appTotal; //create a variable 'finalTotal' by adding 'musicTotal' and 'appTotal'

//the conditional below is a ternary statement that will see if you have enough money for all the music and apps. It will also use a logical operator to see if both statements are true. If true, the console will print this, "Your final total is " + finalTotal + " which is enough to get everything you want and you have enough space on your iPhone!". If even one of the two is false, it will print this, "I'm sorry but you just don't have enough money to get it all and while you're at it, you might want to check to see if you have enough space on your iPhone."
(finalTotal <= moneyLeft && iphoneSpace) ? console.log("Your final total is " + finalTotal + " which is enough to get everything you want and you have enough space on your iPhone!") : console.log("I'm sorry but you just don't have enough money to get it all and while you're at it, you might want to check to see if you have enough space on your iPhone.");

/*For my own problem, I entered 5 into the first prompt, 2 for the second, and 3 for the third. With these numbers entered and the amount each thing cost, I was given the message, "I'm sorry but you just don't have enough money to get it all and while you're at it, you might want to check to see if you have enough space on your iPhone."*/

