# Toy Robot Code Challenge

This is an implementation of the Toy Robot Challenge using Typescript/JavaScript (ES5).
This is an interactive cli application which simulates a toy robot moving on a square table top, of dimensions 5 units x 5 units.
The robot cannot be moved in a manner that leads the robot to fall off the table.

## Installing

From project folder

```bash
npm install
```

## Requires

npm installed


## Getting started

To start running this interactive application

```bash
npm run start
```

This application receives a series of command form the command line.
Hit Ctrl + C to exit.


## Commands

These are the valid commands a user can enter:

* PLACE X,Y,F   - displays the robot's position
* MOVE          - moves the robot forward \*
* LEFT          - turns the robot left \*
* RIGHT         - turns the robot right \*
* REPORT        - reports the robot's position \*

\* Run the PLACE command before executing this instruction


## Sample input

```bash
PLACE 1,2,NORTH
MOVE
LEFT
MOVE
REPORT
Output: 0,3,WEST
````


## Compile into javascript

```bash
npm run build
```

## Project structure

* src           - typescript source files
* tests         - unit tests

## Tests

Execute unit tests
```bash
npm run test
```

Execute coverage tests
```bash
npm run coverage
```
