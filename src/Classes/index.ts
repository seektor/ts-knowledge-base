enum ChessPieceType {
  Pawn = "Pawn",
  Queen = "Queen",
}

type Color = "Black" | "White";

interface Position {
  x: number;
  y: number;
}

interface Movable {
  move(x: number, y: number): void;
}

abstract class ChessPiece implements Movable {
  public abstract readonly type: ChessPieceType;
  public readonly color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  // Sux anyway, doesn't really care about the params
  public move(): void {}
}

class Pawn extends ChessPiece {
  public type: ChessPieceType = ChessPieceType.Pawn;

  private static isPawn: boolean = true;

  private _position: Position = { x: 0, y: 0 };

  get position(): Position {
    return this._position;
  }

  set position(position: Position) {
    this._position = position;
  }

  constructor(color: Color) {
    super(color);
  }
}

const p = new Pawn("Black");

class Game {
  private playerOne: string;
  private playerTwo: string;

  constructor();
  constructor(playerOne: string);
  constructor(randomNumber: number);
  // This has to be the final overload
  constructor(paramOne?: string | number, paramTwo?: string) {
    this.playerOne =
      typeof paramOne === "string" ? paramOne || "Player 1" : "From Number";
    this.playerTwo = paramTwo || "Computer";
  }
}

const g = new Game();

interface IFilter {
  new (property: string): IFilter;
  someFunction(): void;
  filter(): void;
}
