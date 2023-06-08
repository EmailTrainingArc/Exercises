const Game = require("./game");

const COD = new Game("Call of Duty", 60);
const RL = new Game("rockit leeg", 0);
const sugondeseNinjas = new Game("Sugondese ninjas", `${12} shitcoins`)
const alvin = new Game("Accuse AP of being Alvin", "priceless")
const pimpMyRide = new Game("PimpMyRide Deluxe!", 100)

// module.exports = COD;
// module.exports = RL;
// module.exports = sugondeseNinjas;
// module.exports = alvin;
// module.exports = pimpMyRide;

const gameStore = [COD, RL, sugondeseNinjas, alvin, pimpMyRide];

module.exports = gameStore;