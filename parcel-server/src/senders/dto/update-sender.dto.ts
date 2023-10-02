import { PartialType } from '@nestjs/mapped-types';
import { CreateSenderDto } from './create-sender.dto';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UpdateSenderDto extends PartialType(CreateSenderDto) {
    @IsString()
    name?: string;

    @IsString()
    location?: string;

}
