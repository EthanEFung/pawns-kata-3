const { Game, Pawn, Player } = require("../client/js/models");

/**
 * const actual;
 * const expected;
 * expect(actual).toEqual(expected)
 *
 * const actual;
 * expect(actual).toBeNull
 *
 */

describe("Game", function() {
  it("should render a board with correct notation", function() {
    const actual = new Game().renderBoard(3);
    const expected = [
      [
        { piece: null, coord: "a3" },
        { piece: null, coord: "b3" },
        { piece: null, coord: "c3" }
      ],
      [
        { piece: null, coord: "a2" },
        { piece: null, coord: "b2" },
        { piece: null, coord: "c2" }
      ],
      [
        { piece: null, coord: "a1" },
        { piece: null, coord: "b1" },
        { piece: null, coord: "c1" }
      ]
    ];
    expect(actual).toEqual(expected);
  });

  it("should set up pieces to start", function() {
    const test = new Game(3);
    test.start();
    const actual = test.board;

    const expected = [
      [
        { piece: new Pawn("black", "a3"), coord: "a3" },
        { piece: new Pawn("black", "b3"), coord: "b3" },
        { piece: new Pawn("black", "c3"), coord: "c3" }
      ],
      [
        { piece: null, coord: "a2" },
        { piece: null, coord: "b2" },
        { piece: null, coord: "c2" }
      ],
      [
        { piece: new Pawn("white", "a1"), coord: "a1" },
        { piece: new Pawn("white", "b1"), coord: "b1" },
        { piece: new Pawn("white", "c1"), coord: "c1" }
      ]
    ];
    expect(actual).toEqual(expected);
  });
});

describe("Pawns", function() {
  it("should have a designated side", function() {
    const actual = new Pawn("black").side;
    const expected = "black";
    expect(actual).toEqual(expected);
  });

  it("should have a designated coord", function() {
    const actual = new Pawn("white", "a1").coord;
    const expected = "a1";
    expect(actual).toEqual(expected);
  });

  it("should be able to advance to an empty space", function() {
    const game = new Game(3);
    game.start();
    const pawn = game.board[0][0].piece;
    pawn.advance(pawn.coord, "a2", game.board);

    const expected = [
      [
        { piece: null, coord: "a3" },
        { piece: new Pawn("black", "b3"), coord: "b3" },
        { piece: new Pawn("black", "c3"), coord: "c3" }
      ],
      [
        { piece: new Pawn("black", "a2"), coord: "a2" },
        { piece: null, coord: "b2" },
        { piece: null, coord: "c2" }
      ],
      [
        { piece: new Pawn("white", "a1"), coord: "a1" },
        { piece: new Pawn("white", "b1"), coord: "b1" },
        { piece: new Pawn("white", "c1"), coord: "c1" }
      ]
    ];

    expect(game.board).toEqual(expected);
  });
});
