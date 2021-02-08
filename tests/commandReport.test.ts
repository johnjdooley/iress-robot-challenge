var assert = require('assert');
import { DIRECTION, Position } from "../src/definitions"
import { CommandReport } from "../src/commandReport";
import { Robot } from "../src/robot";
import { PlayArea } from "../src/playarea";

describe('CommandReport', function() {
  describe('isValid check', function() {
    it('should return false when any args passed', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandReport: CommandReport = new CommandReport(["dummy"], robot, playarea);

      assert.equal(commandReport.isValid(), false);
    });

    it('should return false if robot hasnt been placed', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandReport: CommandReport = new CommandReport([], robot, playarea);

      assert.equal(robot.isOnTable, false);
      assert.equal(commandReport.isValid(), false);
    });

    it('should return true if robot hasnt been placed', function() {
      const robot: Robot = new Robot();
      robot.placeOnTable(DIRECTION.EAST, new Position(1, 1));
      const playarea: PlayArea = new PlayArea(3, 3);
      const commandReport: CommandReport = new CommandReport([], robot, playarea);

      assert.ok(commandReport.isValid());
    });
  });

  describe('Run check', function() {
    it('report the robot\'s state', function() {
       const robot: Robot = new Robot();
       robot.placeOnTable(DIRECTION.WEST, new Position(2, 1));
       const playarea: PlayArea = new PlayArea(3, 3);
       const commandReport: CommandReport = new CommandReport([], robot, playarea);
       commandReport.isValid();
       commandReport.run();

       assert.equal(commandReport.lastOutputLine, robot.getSummary());
    });
  });
});
