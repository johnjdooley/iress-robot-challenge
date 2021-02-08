/**
* Command line input is used to parse text input from user
*/
export class CommandLineInput {
  private _commandName: string;
  private _commandArgs:  Array<string>;

  constructor(private inputLine: string) {};

  /**
  * Check if command params are valid
  * @returns true if args are valid
  */
  public isValid(): boolean {

    let commandSanitised : string = this.inputLine.trim();

    //remove double spaces from input
    commandSanitised = commandSanitised.replace(/\s+/g, ' ');

    //if we haven't entered anything validation failed
    if (commandSanitised.length == 0) {
      return false;
    }

    let commandParts: Array<string> = commandSanitised.split(' ');

    //normalise command to lower case string
    this._commandName = commandParts[0].toLowerCase();

    this._commandArgs = commandParts.splice(1);

    return true;
  }
  /**
  * gets the command parsed from the input line
  * @returns command name
  */
  public get commandName(): string {
    return this._commandName;
  }

  /**
  * gets the command arguments from the input line
  * @returns list of strings
  */
  public get commandArgs(): Array<string> {
    return this._commandArgs;
  }

  /**
  * Display command options
  */
  public static displayHelp(): void {
    console.info("**** Command Help ****");
    console.info("PLACE X,Y,F");
    console.info("MOVE");
    console.info("LEFT");
    console.info("RIGHT");
    console.info("REPORT");
    console.info("********************");
  }
}
