import { DIRECTION, Position } from "./definitions";
import { CommandBase } from "./commandBase";

/**
* Command to place the robot on the table
*/
export class CommandPlace extends CommandBase {

  protected position: Position;
  protected direction: DIRECTION;

  /**
  * Check if command params are valid
  * @returns true if args are valid
  */
  public isValid(): boolean {
    //ensure command hasn't been run with more then just the command name
    if (this.args.length !== 1) {
      return false;
    }

    const paramaters = this.args[0].split(',');

    if (paramaters.length !== 3) {
      return false;
    }

    if (this.isIntString(paramaters[0]) === false || this.isIntString(paramaters[1]) === false) {
      return false;
    }

    const position: Position = new Position(parseInt(paramaters[0]), parseInt(paramaters[1]));

    if (this.playarea.isPositionValid(position) === false) {
      return false;
    }

    const  direction: DIRECTION = DIRECTION[paramaters[2].toUpperCase()];

    if (typeof direction === 'undefined') {
      return false;
    }

    this.position = position;
    this.direction = direction;

    return true;
  }

  /**
  * Executes command
  */
  public run() {
    this.robot.placeOnTable(this.direction, this.position);
  }

  /**
  * Check to make sure string only contains digits
  * @returns true if natural number
  */
  protected isIntString(valueStr: string): boolean {
    const regex = /^\d+$/;

    return regex.test(valueStr);
  }
}
