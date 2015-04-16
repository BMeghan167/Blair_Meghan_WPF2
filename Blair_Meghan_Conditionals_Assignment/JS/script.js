//Meghan Blair
//April 16, 2015
//Conditionals Assignment

var songCost = 1.27
var albumCost = 9.99
var appCost = 2.99
var moneyLeft = 30

var songAmount = prompt("How many songs would you like to purchase from iTunes?");
var albumAmount = prompt("How many albums would you like to purchase from iTunes?");
var appAmount = prompt("How many albums would you like to purchase from the App store?");

if (songAmount === ""){
    prompt("You didn't tell me how many songs you wanted to buy!");
}else{
    console.log("Good job, you already told me how many songs you want!");
}

if (albumAmount === ""){
    prompt("You forgot to tell me how many albums you want to purchase!");
}else{
    console.log("Great! I have the amount of albums you want to buy!");
}

if (appAmount === ""){
    prompt("Hold up! You didn't tell me how many apps you want to get!");
}else{
    console.log("Yay! I have the amount of apps you want to purchase!");
}