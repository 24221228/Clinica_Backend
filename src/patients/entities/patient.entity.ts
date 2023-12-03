import { User } from 'src/users/entities/user.entity'
import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class Patient {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    nombres: string

    @Column('text')
    apellidos: string

    @Column('text')
    genero: string

    @Column('text')
    documento_tipo: string

    @Column('int')
    documento_numero: number

    @Column('text')
    fecha_nacimiento: string

    @Column('text')
    direccion_completa: string

    @Column('int')
    numero_telefono: number

    @ManyToOne(
        () => User,
        (user) => user.patient,
        {eager: true}
    )
    user: User
}
