import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialist {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    nombres: string

    @Column('text')
    apellidos: string

    @Column('text')
    documento_tipo: string

    @Column('int')
    documento_numero: number

    @Column('int')
    telefono: number

    @Column('text')
    direccion: string

    @Column('int')
    intervalo_tiempo: number
}
