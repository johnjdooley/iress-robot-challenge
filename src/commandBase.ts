import { Robot } from "./robot";
import { PlayArea } from "./playarea";

/**
* Base class for all commands
*/
export abstract class CommandBase {
  constructor(protected args: Array<string>, protected robot: Robot, protected playarea: PlayArea){};
  /**
  * Check if command params are valid
  * @returns true if args are valid
  */
  abstract isValid(): boolean;
  /**
  * Executes command
  */
  abstract run(): void;
}
