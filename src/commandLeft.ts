import { DIRECTION, Position } from "./definitions";
import { CommandBase } from "./commandBase";

/**
* Command to turn the robot left
*/
export class CommandLeft extends CommandBase {

  /**
  * Check if command params are valid
  * @returns true if args are valid
  */
  public isValid(): boolean {

    //ensure command hasn't been run with more then just the command name
    if (this.args.length !== 0) {
      return false;
    }

    //ensure robot is on table
    if (this.robot.isOnTable === false) {
      return false;
    }

    return true;
  }

  /**
  * Executes command
  */
  public run() {
    this.robot.rotateLeft();
  }
}
