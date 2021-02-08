var assert = require('assert');
import { DIRECTION } from "../src/definitions"
import { CommandPlace } from "../src/commandPlace";
import { Robot } from "../src/robot";
import { PlayArea } from "../src/playarea";

describe('CommandPlace', function() {
  describe('isValid check', function() {
    it('should return false when more than one args passed', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandPlace: CommandPlace = new CommandPlace(["dummy", "dummy"], robot, playarea);

      assert.equal(commandPlace.isValid(), false);
    });

    it('should return false when params are not comma seperated', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandPlace: CommandPlace = new CommandPlace(["2-5-2"], robot, playarea);

      assert.equal(commandPlace.isValid(), false);
    });

    it('should return false when params are second int is invalid', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandPlace: CommandPlace = new CommandPlace(["1,BAD,EAST"], robot, playarea);

      assert.equal(commandPlace.isValid(), false);
    });

    it('should return false when position is not 2 ints', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandPlace: CommandPlace = new CommandPlace(["BAD,BAD,2"], robot, playarea);

      assert.equal(commandPlace.isValid(), false);
    });

    it('should return false when position is invalid', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(2, 2);
      const commandPlace: CommandPlace = new CommandPlace(["4,5,2"], robot, playarea);

      assert.equal(commandPlace.isValid(), false);
    });

    it('should return false when direction is invalid', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(5, 5);
      const commandPlace: CommandPlace = new CommandPlace(["2,3,BAD_DIRECTION"], robot, playarea);

      assert.equal(commandPlace.isValid(), false);
    });

    it('should return true when valid params passed', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(4, 4);
      const commandPlace: CommandPlace = new CommandPlace(["2,3,NORTH"], robot, playarea);

      assert.ok(commandPlace.isValid());
    });
  });

  describe('Run check', function() {
    it('should place the robot on the table once run', function() {
      const robot: Robot = new Robot();
      const playarea: PlayArea = new PlayArea(6, 6);
      const commandPlace: CommandPlace = new CommandPlace(["2,5,SOUTH"], robot, playarea);
      commandPlace.isValid();
      commandPlace.run();

      assert.equal(robot.position.x, 2);
      assert.equal(robot.position.y, 5);
      assert.equal(robot.direction, DIRECTION.SOUTH);
      assert.ok(robot.isOnTable);
    });
  });
});
