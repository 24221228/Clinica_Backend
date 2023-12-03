import { IsString, MinLength } from "class-validator";

export class CreateSpecialtyDto {
    @IsString()
    @MinLength(5)
    nombre: string
}
