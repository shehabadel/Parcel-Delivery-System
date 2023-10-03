import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';
export class CreateParcelDto {
    @IsNotEmpty()
    @IsNumber()
    senderId: number;

    @IsNotEmpty()
    @IsString()
    pickupAddress: string;

    @IsNotEmpty()
    @IsString()
    dropoffAddress: string;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsBoolean()
    isPicked?:boolean;
}
