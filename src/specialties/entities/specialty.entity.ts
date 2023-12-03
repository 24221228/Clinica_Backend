import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialty {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text',{
        unique: true
    })
    nombre: string
}
