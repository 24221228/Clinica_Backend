import { IsString, IsEmail, MinLength, IsBoolean, Matches } from "class-validator";

export class LoginUserDto {
    @IsString()
    @IsEmail()
    correo_electronico: string;

    @IsString()
    @MinLength(7)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{
            message: 'La contraseña debe tener una letra Mayúscula, Minúscula y un número'
        }
    )
    contraseña: string;
}
