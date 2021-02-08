import { DIRECTION, Position  } from "./definitions";

/**
* Playing area for robot
*/
export class PlayArea {
  constructor(private _length: number, private _height: number){};

  /**
  * Calculates if a position is within the playarea
  * @returns true if within bounds
  */
  public isPositionValid(position: Position): boolean {
    if (position.x < 0 || position.y < 0) {
      return false;
    }

    if (position.x > ( this._length - 1 ) || position.y > ( this._height - 1) ) {
      return false;
    }

    return true;
  }

  /**
  * Calculates next position based on origin position and direction
  * @returns Position next calculated position
  */
  public getNextPosition(position: Position, stepDirection: DIRECTION): Position {
      let newPosition: Position = new Position(position.x, position.y);
      switch (stepDirection) {
        case DIRECTION.NORTH:
          newPosition.y += 1;
          break;
        case DIRECTION.SOUTH:
          newPosition.y -= 1;
          break;
        case DIRECTION.EAST:
          newPosition.x += 1;
          break;
        case DIRECTION.WEST:
          newPosition.x -= 1;
          break;
      }

      return newPosition;
  }

}
