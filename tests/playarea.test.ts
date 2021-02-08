var assert = require('assert');
import { Position, DIRECTION } from "../src/definitions"
import { Robot } from "../src/robot";
import { PlayArea } from "../src/playarea";

describe('PlayArea', function() {
  describe('isValidPosition check', function() {
    it('should return false if x or y is negative', function() {
      const playarea: PlayArea = new PlayArea(2, 2);

      assert.equal(playarea.isPositionValid(new Position(-1, 0)), false);

      assert.equal(playarea.isPositionValid(new Position(0, -1)), false);
    });

    it('should return false if x or y is beyond the length or width', function() {
      const playarea: PlayArea = new PlayArea(2, 2);

      // zero index so length 2 would be 0, 1 so 2 is out of bounds
      assert.equal(playarea.isPositionValid(new Position(2, 0)), false);

      assert.equal(playarea.isPositionValid(new Position(0, 2)), false);
    });

    it('should return true if x and y is within playarea bounds', function() {
      const playarea: PlayArea = new PlayArea(4, 4);

      assert.ok(playarea.isPositionValid(new Position(2, 2)));
    });
  });

  describe('getNextPosition check', function() {
    it('check north direction', function() {
      const playarea: PlayArea = new PlayArea(3, 3);

      const newPosition : Position = playarea.getNextPosition(new Position(1, 1), DIRECTION.NORTH);

      assert.ok(Position.equals(newPosition, new Position(1, 2)));
    });

    it('check south direction', function() {
      const playarea: PlayArea = new PlayArea(3, 3);

      const newPosition : Position = playarea.getNextPosition(new Position(1, 1), DIRECTION.SOUTH);

      assert.ok(Position.equals(newPosition, new Position(1, 0)));
    });

    it('check east direction', function() {
      const playarea: PlayArea = new PlayArea(3, 3);

      const newPosition : Position = playarea.getNextPosition(new Position(1, 1), DIRECTION.EAST);

      assert.ok(Position.equals(newPosition, new Position(2, 1)));
    });

    it('check west direction', function() {
      const playarea: PlayArea = new PlayArea(3, 3);

      const newPosition : Position = playarea.getNextPosition(new Position(1, 1), DIRECTION.WEST);

      assert.ok(Position.equals(newPosition, new Position(0, 1)));
    });
  });
});
