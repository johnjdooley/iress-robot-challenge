import { DIRECTION, Position } from "./definitions";

/**
* Robot to be instructed
*/
export class Robot {
  private _direction : DIRECTION;
  private _position: Position;
  private _isOnTable: boolean;

  public constructor(){
    this._isOnTable = false;
  }

  /**
  * Set robot on table
  */
  public placeOnTable(direction: DIRECTION, position: Position): void {
    this._isOnTable = true;
    this._direction = direction;
    this._position = position;
  }

  /**
  * turn robot counter clockwise
  */
  public rotateLeft(): void {
      //since directions are int enums if we add 3 and mod by 4 we get a looping counter
      // 0 (NORTH) + 3 % 4 = 3 (WEST)
      this._direction = ( this._direction + 3 ) % 4;
  }

  /**
  * turn robot clockwise
  */
  public rotateRight(): void {
      //since directions are int enums if we add 1 and mod by 4 we get a looping counter
      // 3 (WEST) + 1 % 4 = 0 (NORTH)
      this._direction = ( this._direction + 1 ) % 4;
  }

  /**
  * get a summary of the robot's current state
  */
  public getSummary(): string {
      const directionStr: string = DIRECTION[this._direction];
      return `${this.position.x},${this.position.y},${directionStr}`
  }

  public get direction(): DIRECTION {
    return this._direction;
  }

  public get position(): Position {
    return this._position;
  }

  public get isOnTable(): boolean {
    return this._isOnTable;
  }
}
