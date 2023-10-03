import { PartialType } from '@nestjs/mapped-types';
import { CreateParcelDto } from './create-parcel.dto';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateParcelDto extends PartialType(CreateParcelDto) {

    @IsString()
    pickupAddress?: string;

    @IsString()
    dropoffAddress?: string;

    @IsString()
    status?: string;

    @IsBoolean()
    isPicked?: boolean;
}
