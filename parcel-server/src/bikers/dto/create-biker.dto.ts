import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateBikerDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    password: string;
}
