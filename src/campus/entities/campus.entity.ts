import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Campus {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text',{
        unique: true
    })
    nombre: string
}
