import type { Property } from 'csstype';
import type Piece from "../Utils/Piece.js"

export default interface ITheme
{
    getName(): string;
    getBoardColors(): [black: Property.Color, white: Property.Color];
    getPiecesSprites(): Map<string, Map<Piece, string>>
}