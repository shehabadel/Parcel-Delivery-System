import { IsNumber } from 'class-validator';

export class PickUpParcelDto {
    @IsNumber()
    bikerId: number;

    @IsNumber()
    parcelId: number;
}