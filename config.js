const gameStore = require("./games");

// function elements_of_gamestore() {
//     const COD = gameStore[0];
// }

const config = {
    gameName: {
        CODname: gameStore[0].name,
        RLname: gameStore[1].name
    },
    gamePrice: {
        CODprice: gameStore[0].price,
        RLprice: gameStore[1].name
    }
}
console.log(config);
module.exports = config;

// we need to 'extract' the 0th value of the gameStore array
// do we use a for loop? or something else...
