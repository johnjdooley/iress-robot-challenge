export enum DIRECTION {
  NORTH = 0,
  EAST,
  SOUTH,
  WEST,
}

/**
* Position class to track robot position
*/
export class Position {
  constructor(public x: number, public y: number){};

  /**
  * Override typical reference check to measure equality
  * @returns true  x componet and y componet are equal
  */
  static equals(src: Position, target: Position): boolean {
        return (src.x == target.x && src.y == target.y);
  }
}
