import type { Property } from "csstype";
import type ITheme from "./ITheme.js"
import type Piece from "../Utils/Piece.js"

class DefaultTheme implements ITheme
{
    getName(): string
    {
        return "Default Theme";
    }
    getBoardColors(): [black: Property.Color, white: Property.Color]
    {
        return ["#af8360", "#f0dab5"];
    }
    getPiecesSprites(): Map<string, Map<Piece, string>>
    {
        throw new Error("Method not implemented.");
    }

}