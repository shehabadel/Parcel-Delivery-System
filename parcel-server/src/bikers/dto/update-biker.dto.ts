import { PartialType } from '@nestjs/mapped-types';
import { CreateBikerDto } from './create-biker.dto';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UpdateBikerDto extends PartialType(CreateBikerDto) {
    @IsString()
    name?: string;
}
