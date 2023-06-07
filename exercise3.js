// 3. Mock out some functionality of Steam.
//    a) Declare a class `Game` that takes two arguments in it's constructor, `name` and `price`.
//    b) Create 5 games with different names and prices.
//    c) Declare a class: `SteamUser`, that takes one argument in it's constructor ,`balance` and sets this property on the user, as well as an empty array `games`.

//    d) Write a function on that SteamUser class that lets a user purchase a game, if they have enough `balance` to afford the `price` of the game. If they can not afford it, throw an error.
//    e) Write a function on that SteamUser class that lets a user wishlist a game. If they already own it, throw an error.
//    f) Write a function on that SteamUser that logs out a SteamUser's games alphabetically.
//    g) Change the function you wrote in `e)` to take a single argument, `sortType`, to let the user decide to sort them alphabetically or by price. Change the function to use that sortType and sort appropriately based on it.

const Game = require("./game.js")
const SteamUser = require("./steamuser.js")


let COD = new Game("Call of Duty", 60);
var RL = new Game("rockit leeg", 0);
const sugondeseNinjas = new Game("Sugondese ninjas", `${12} shitcoins`)
const alvin = new Game("Accuse AP of being Alving", "priceless")
const pimpMyRide = new Game("PimpMyRide Deluxe!", 100)

// a) + b)
console.log(COD,`\n`,RL,`\n`,sugondeseNinjas,`\n`,alvin,`\n`,pimpMyRide,`\n`);
// c)
console.log(new SteamUser(25))

// d) function {if}
// e) function push->"wishlist" array
// 

