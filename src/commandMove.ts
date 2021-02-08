import { DIRECTION, Position } from "./definitions";
import { CommandBase } from "./commandBase";

/**
* Command to move the robot forward
*/
export class CommandMove extends CommandBase {

  protected position: Position;

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

    const newPosition = this.playarea.getNextPosition(this.robot.position, this.robot.direction);

    if (this.playarea.isPositionValid(newPosition) === false) {
      return false;
    }

    this.position = newPosition;

    return true;
  }

  /**
  * Executes command
  */
  public run() {
    this.robot.placeOnTable(this.robot.direction, this.position);
  }
}
