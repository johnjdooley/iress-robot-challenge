var assert = require('assert');
import { Robot } from "../src/robot";
import { PlayArea } from "../src/playarea";
import { CommandBase } from "../src/commandBase";
import { CommandFactory } from "../src/commandFactory";
import { CommandPlace } from "../src/commandPlace";
import { CommandMove } from "../src/commandMove";
import { CommandLeft } from "../src/commandLeft";
import { CommandRight } from "../src/commandRight";
import { CommandReport } from "../src/commandReport";

describe('CommandFactory', function() {
  describe('getCommand check', function() {
    const robot: Robot = new Robot();
    const playarea: PlayArea = new PlayArea(2, 2);
    const commandFactory: CommandFactory = new CommandFactory(robot, playarea);
    it('get place command', function() {
      assert.ok(commandFactory.getCommand("place", []) instanceof CommandPlace);
    });
    it('get move command', function() {
      assert.ok(commandFactory.getCommand("move", []) instanceof CommandMove);
    });
    it('get report command', function() {
      assert.ok(commandFactory.getCommand("report", []) instanceof CommandReport);
    });
    it('get left command', function() {
      assert.ok(commandFactory.getCommand("left", []) instanceof CommandLeft);
    });
    it('get right command', function() {
      assert.ok(commandFactory.getCommand("right", []) instanceof CommandRight);
    });
    it('try invalid command name', function() {
      assert.throws(() => commandFactory.getCommand("BAD_NAME", []), Error, "invalid command did not throw an error");
    });
  });
});
