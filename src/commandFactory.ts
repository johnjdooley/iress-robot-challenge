import { Robot } from "./robot";
import { PlayArea } from "./playarea";
import { CommandBase } from "./commandBase";
import { CommandPlace } from "./commandPlace";
import { CommandMove } from "./commandMove";
import { CommandLeft } from "./commandLeft";
import { CommandRight } from "./commandRight";
import { CommandReport } from "./commandReport";

/**
* Factory class to generate relevant child command classes
*/
export class CommandFactory {

  constructor(private robot: Robot, private playarea: PlayArea){};

  /**
  * Get concrete command class from args supplied
  * @returns Command
  */
  public getCommand(name: string, additionalArgs: Array<string>): CommandBase {
    //command returned based on name
    switch(name) {
       case "place": {
          return new CommandPlace(additionalArgs, this.robot, this.playarea);
       }
       case "move": {
          return new CommandMove(additionalArgs, this.robot, this.playarea);
       }
       case "left": {
          return new CommandLeft(additionalArgs, this.robot, this.playarea);
       }
       case "right": {
          return new CommandRight(additionalArgs, this.robot, this.playarea);
       }
       case "report": {
          return new CommandReport(additionalArgs, this.robot, this.playarea);
       }
       default: {
          throw new Error(`Unknown command type: ${name}`);
       }
    }
  }
}
