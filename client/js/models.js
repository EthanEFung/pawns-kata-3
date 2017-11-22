// TODO: BUILD MODELS
class Game {
  constructor() {
    this.board = this.renderBoard(5);
    this.turn = "white";
    this.winner = null;

    this.start(this.board);
  }
  renderBoard(n) {
    if (n > 8) throw new Error("cannot render a board bigger than 8 spaces");
    const board = [];
    const colNotation = "abcdefgh";

    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push({ piece: null, coord: colNotation[j] + (i + 1) });
      }
      board.unshift(row);
    }
    return board;
  }
  start() {}
}

class Pawn {}

class Player {}

module.exports = { Game };
