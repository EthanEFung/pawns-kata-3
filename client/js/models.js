// TODO: BUILD MODELS
class Game {
  constructor(n) {
    this.board = this.renderBoard(n);
    this.turn = "white";
    this.winner = null;
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
  start() {
    const firstRow = this.board[0];
    const lastRow = this.board[this.board.length - 1];

    firstRow.forEach(sq => (sq.piece = new Pawn("black", sq.coord)));
    lastRow.forEach(sq => (sq.piece = new Pawn("white", sq.coord)));
    // window.alert("game has begun!");
  }
}

class Pawn {
  constructor(side, coord) {
    this.side = side;
    this.coord = coord;
  }
  advance(currentCoord, desiredCoord, board) {
    if ((!squareIsOccupied(board), desiredCoord)) {
    }
  }
  capture() {}
}

class Player {}

module.exports = { Game, Pawn, Player };
