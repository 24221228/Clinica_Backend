import { IsDate, IsNumber, IsString } from "class-validator"

export class CreatePatientDto {
    @IsString()
    nombres: string

    @IsString()
    apellidos: string

    @IsString()
    genero: string

    @IsString()
    documento_tipo: string

    @IsNumber()
    documento_numero: number

    @IsString()
    fecha_nacimiento: string

    @IsString()
    direccion_completa: string

    @IsNumber()
    numero_telefono: number
}
