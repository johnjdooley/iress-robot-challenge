var assert = require('assert');
import { DIRECTION, Position } from "../src/definitions"
import { CommandRight } from "../src/commandRight";
import { Robot } from "../src/robot";
import { PlayArea } from "../src/playarea";

describe('CommandRight', function() {
  describe('isValid check', function() {
    it('should return false when any args passed', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandRight: CommandRight = new CommandRight(["dummy"], robot, playarea);

      assert.equal(commandRight.isValid(), false);
    });

    it('should return false if robot hasnt been placed', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandRight: CommandRight = new CommandRight([], robot, playarea);

      assert.equal(robot.isOnTable, false);
      assert.equal(commandRight.isValid(), false);
    });

    it('should return true if robot hasnt been placed', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.EAST, new Position(1, 1));
      const playarea: PlayArea = new PlayArea(3, 3);
      const commandRight: CommandRight = new CommandRight([], robot, playarea);

      assert.ok(commandRight.isValid());
    });
  });

  describe('Run check', function() {
    it('should rotate the robot left', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.WEST, new Position(1, 1));
      const playarea: PlayArea = new PlayArea(3, 3);
      const commandRight: CommandRight = new CommandRight([], robot, playarea);
      commandRight.isValid();
      commandRight.run();

      assert.equal(robot.direction, DIRECTION.NORTH);
    });
  });
});
