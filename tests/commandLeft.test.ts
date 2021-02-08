var assert = require('assert');
import { DIRECTION, Position } from "../src/definitions"
import { CommandLeft } from "../src/commandLeft";
import { Robot } from "../src/robot";
import { PlayArea } from "../src/playarea";

describe('CommandLeft', function() {
  describe('isValid check', function() {
    it('should return false when any args passed', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandLeft: CommandLeft = new CommandLeft(["dummy"], robot, playarea);

      assert.equal(commandLeft.isValid(), false);
    });

    it('should return false if robot hasnt been placed', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandLeft: CommandLeft = new CommandLeft([], robot, playarea);

      assert.equal(robot.isOnTable, false);
      assert.equal(commandLeft.isValid(), false);
    });

    it('should return true if robot hasnt been placed', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.EAST, new Position(1, 1));
      const playarea: PlayArea = new PlayArea(3, 3);
      const commandLeft: CommandLeft = new CommandLeft([], robot, playarea);

      assert.ok(commandLeft.isValid());
    });
  });

  describe('Run check', function() {
    it('should rotate the robot left', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.WEST, new Position(1, 1));
      const playarea: PlayArea = new PlayArea(3, 3);
      const commandLeft: CommandLeft = new CommandLeft([], robot, playarea);
      commandLeft.isValid();
      commandLeft.run();

      assert.equal(robot.direction, DIRECTION.SOUTH);
    });
  });
});
