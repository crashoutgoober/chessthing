const compiledData = {  }
const letters = [
  "a", "b", "c",
  "d", "e", "f",
  "g", "h"
]

const attemptMove = (moveName) => {
  var data = {};
  
  data.main = 35.56
  data.other = 72.32
  
  compiledData[moveName] = data;
}
const knightMoves = ["Na3", "Nh3", "Nf3", "Nc3"]

knightMoves.forEach(value => attemptMove(value))

letters.forEach((value, index) => {
    var letter = value.toUpperCase()
    attemptMove(letter + "3"); attemptMove(letter + "4");
})
console.log(compiledData)
