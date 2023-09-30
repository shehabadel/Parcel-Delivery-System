import { PartialType } from '@nestjs/mapped-types';
import { CreateBikerDto } from './create-biker.dto';

export class UpdateBikerDto extends PartialType(CreateBikerDto) {}
