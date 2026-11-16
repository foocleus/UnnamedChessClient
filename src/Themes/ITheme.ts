import type { Property } from 'csstype';

export default interface ITheme
{
    getName(): string;
    getBoardColors(): [black: Property.Color, white: Property.Color];
    getPiecesSprites(): Array<Array<string>>
}