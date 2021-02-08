import { CommandBase } from "./commandBase";
import { CommandLineInput } from "./commandLineInput";
import { CommandFactory } from "./commandFactory";
import { Robot } from "./robot";
import { PlayArea } from "./playarea";
const readline = require('readline');

const robot: Robot = new Robot();
const playarea: PlayArea = new PlayArea(5, 5);
const commandFactory: CommandFactory = new CommandFactory(robot, playarea);

//construct interface to stdio
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//on line event, process input
rl.on('line', (input) => {
  const commandLineInput: CommandLineInput = new CommandLineInput(input);

  //If input line is badly formatted or empty display help
  if (commandLineInput.isValid() === false) {
    CommandLineInput.displayHelp();
    return;
  }

  try {
    //get command from factory
    const command : CommandBase = commandFactory.getCommand(commandLineInput.commandName,
                                                            commandLineInput.commandArgs);

    if (command.isValid()){
      command.run();
    }
  } catch (e) {
    //if there's been an input issue, display help
    console.error(e.message);
    CommandLineInput.displayHelp();
  }

});
