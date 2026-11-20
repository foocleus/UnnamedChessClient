import type IBoard from "./Boards/IBoard.js";
import Piece from './Utils/Piece.js'
import startingBoardState from "./Utils/StartingBoardState.js"

export default class Game 
{

    private _boardState: Map<string, Piece>;
    // private _board: IBoard;

    constructor(board: IBoard)
    {
        // this._board = board;
        this._boardState = new Map(startingBoardState);
    }

    //function RestartGame(params: type)
    // {

    // }

}