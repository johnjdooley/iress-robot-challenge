var assert = require('assert');
import { DIRECTION, Position } from "../src/definitions"
import { CommandMove } from "../src/commandMove";
import { Robot } from "../src/robot";
import { PlayArea } from "../src/playarea";

describe('CommandMove', function() {
  describe('isValid check', function() {
    it('should return false when any args passed', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandMove: CommandMove = new CommandMove(["dummy"], robot, playarea);

      assert.equal(commandMove.isValid(), false);
    });

    it('should return false if robot hasnt been placed', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandMove: CommandMove = new CommandMove([], robot, playarea);

      assert.equal(robot.isOnTable, false);
      assert.equal(commandMove.isValid(), false);
    });

    it('should return false when nextPosition is invalid', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.EAST, new Position(2, 2));
      const playarea: PlayArea = new PlayArea(3, 3);
      const commandMove: CommandMove = new CommandMove([], robot, playarea);

      assert.equal(commandMove.isValid(), false);
    });
  });

  describe('Run check', function() {
    it('should move the robot once run', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.WEST, new Position(1, 1));
      const playarea: PlayArea = new PlayArea(3, 3);
      const commandMove: CommandMove = new CommandMove([], robot, playarea);
      commandMove.isValid();
      commandMove.run();

      assert.ok(Position.equals(robot.position, new Position(0, 1)));
    });
  });
});
