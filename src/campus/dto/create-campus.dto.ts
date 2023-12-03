import { IsString, MinLength } from "class-validator";

export class CreateCampusDto {
    @IsString()
    @MinLength(5)
    nombre: string
}
