import { IsNumber, IsString } from "class-validator"

export class CreateSpecialistDto {
    @IsString()
    nombres: string

    @IsString()
    apellidos: string

    @IsString()
    documento_tipo: string

    @IsNumber()
    documento_numero: number

    @IsNumber()
    telefono: number

    @IsString()
    direccion: string

    @IsNumber()
    intervalo_tiempo: number
}
