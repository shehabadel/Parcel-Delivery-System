import { PartialType } from '@nestjs/mapped-types';
import { CreateParcelDto } from './create-parcel.dto';
import { IsBoolean, IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateParcelDto extends PartialType(CreateParcelDto) {

    @IsString()
    pickupAddress?: string;

    @IsString()
    dropoffAddress?: string;

    @IsString()
    @IsNotEmpty()
    status?: string;

    @IsBoolean()
    isPicked?: boolean;

    @IsNumber()
    @IsOptional()
    bikerId?:number;

    @IsString()
    @IsOptional()
    pickupTime?:string;

    @IsString()
    @IsOptional()
    deliveryTime?:string;
}
