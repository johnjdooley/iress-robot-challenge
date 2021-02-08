var assert = require('assert');
import { Position, DIRECTION } from "../src/definitions"
import { Robot } from "../src/robot";

describe('Robot', function() {
  describe('placeOnTable check', function() {
    it('should set position, direction and isOnTable', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.EAST, new Position(2, 2));

      assert.ok(Position.equals(robot.position, new Position(2, 2)));
      assert.equal(robot.direction, DIRECTION.EAST);
      assert.ok(robot.isOnTable);
    });
  });

  describe('rotateLeft check', function() {
    it('should rotate from NORTH to WEST', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.NORTH, new Position(2, 2));

      robot.rotateLeft();

      assert.equal(robot.direction, DIRECTION.WEST);
    });

    it('should rotate from WEST to SOUTH', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.WEST, new Position(2, 2));

      robot.rotateLeft();

      assert.equal(robot.direction, DIRECTION.SOUTH);
    });

    it('should rotate from SOUTH to EAST', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.SOUTH, new Position(2, 2));

      robot.rotateLeft();

      assert.equal(robot.direction, DIRECTION.EAST);
    });

    it('should rotate from EAST to NORTH', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.EAST, new Position(2, 2));

      robot.rotateLeft();

      assert.equal(robot.direction, DIRECTION.NORTH);
    });
  });

  describe('rotateRight check', function() {
    it('should rotate from NORTH to EAST', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.NORTH, new Position(2, 2));

      robot.rotateRight();

      assert.equal(robot.direction, DIRECTION.EAST);
    });

    it('should rotate from WEST to NORTH', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.WEST, new Position(2, 2));

      robot.rotateRight();

      assert.equal(robot.direction, DIRECTION.NORTH);
    });

    it('should rotate from SOUTH to WEST', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.SOUTH, new Position(2, 2));

      robot.rotateRight();

      assert.equal(robot.direction, DIRECTION.WEST);
    });

    it('should rotate from EAST to SOUTH', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.EAST, new Position(2, 2));

      robot.rotateRight();

      assert.equal(robot.direction, DIRECTION.SOUTH);
    });
  });
});
