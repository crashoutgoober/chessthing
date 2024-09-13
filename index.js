const compiledData = {  }
const letters = [
  "a", "b", "c",
  "d", "e", "f",
  "g", "h"
]

    var engine = new Worker("stockfish.js");
    console.log("GUI: uci");
    engine.postMessage("uci");
    console.log("GUI: ucinewgame");
    engine.postMessage("ucinewgame");

const printOut = (str) => document.write(str + "\n")
const attemptMove = (moveName) => {
  var data = {};
  data.main = 35.56
  data.other = 72.32
  
  compiledData[moveName] = data;

  printOut(`${moveName}: ${data.main}%`)
}
const knightMoves = ["Na3", "Nh3", "Nf3", "Nc3"]

knightMoves.forEach(value => attemptMove(value))

letters.forEach((value, index) => {
    var letter = value.toUpperCase()
    attemptMove(letter + "3"); attemptMove(letter + "4");
})
