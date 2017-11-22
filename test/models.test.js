const { Game } = require("../client/js/models");

/**
 * const actual;
 * const expected;
 * expect(actual).toEqual
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
});
