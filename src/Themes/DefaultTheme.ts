import type { Property } from "csstype";
import type ITheme from "./ITheme.js"

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
    getPiecesSprites(): Array<Array<string>>
    {
        throw new Error("Method not implemented.");
    }

}