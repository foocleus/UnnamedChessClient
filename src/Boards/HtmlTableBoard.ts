import type IBoard from "./IBoard.js"

export default class HtmlTableBoard implements IBoard
{
    private _boardElement: HTMLElement;
    // public get boardElement(): HTMLElement
    // {
    //     return this._boardElement;
    // }
    // public set boardElement(v: HTMLElement)
    // {
    //     this._boardElement = v;
    // }



    constructor(boardContainer: HTMLElement)
    {
        this._boardElement = document.createElement("table");
        this._boardElement.id = "board";
        boardContainer.append(this._boardElement);

        this.BuildBoard();
    }

    BuildBoard(): void 
    {
        //TODO: Queue update and push afterwards using DocumentFragment

        for (let y = 8; y > 1; y--)
        {
            let boardRow: HTMLElement = document.createElement("tr");
            boardRow.id = String(y);

            for (let x = 1; x < 8; x++)
            {
                let boardCell: HTMLElement = document.createElement("td");
                boardCell.id = String.fromCharCode(96 + x); boardRow.id;
                // console.log(`${x} + (${y} % 2) % 2 == 0  ${x + (y % 2)}`)
                boardCell.className = (x + y % 2) % 2 == 0 ? "black-cell" : "white-cell";
                boardRow.append(boardCell);
            }

            this._boardElement.append(boardRow);
        }
    }
}