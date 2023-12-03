import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsEmail, IsString, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsEmail()
    correo_electronico?: string;

    @IsString()
    @MinLength(7)
    contraseña?: string;

    @IsBoolean()
    estatus?: Boolean
}
