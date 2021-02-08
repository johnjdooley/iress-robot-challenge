# Toy Robot Code Challenge

This is an implementation of the Toy Robot Challenge using Typescript/JavaScript (ES5).
This is an interactive cli application about moving a robot on a 5 x 5 grid.

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
* MOVE          - moves the robot forward
* LEFT          - turns the robot left
* RIGHT         - turns the robot right
* REPORT        - reports the robot's position


## Sample input

```bash
PLACE 1,2,NORTH
MOVE
LEFT
MOVE
REPORT
Output: 0,3,WEST
```
