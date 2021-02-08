var assert = require('assert');
import { Position, DIRECTION } from "../src/definitions"
import { Robot } from "../src/robot";

describe('Position', function() {
  describe('equality check', function() {
    it('should set be equal if x and y are equal', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.EAST, new Position(2, 2));

      assert.ok(Position.equals(new Position(2, 2), new Position(2, 2)));
      assert.equal(Position.equals(new Position(1, 2), new Position(2, 2)), false);
      assert.equal(Position.equals(new Position(2, 2), new Position(2, 1)), false);
    });
  });
});
