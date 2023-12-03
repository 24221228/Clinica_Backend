import { Patient } from 'src/patients/entities/patient.entity'
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text',{
        unique: true
    })
    correo_electronico: string

    @Column('text', {
        select: false
    })
    contraseña: string

    @Column('boolean',{
        default: true
    })
    estatus: Boolean

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[]

    @BeforeInsert()
    checkFieldBeforeInsert(){
        this.correo_electronico = this.correo_electronico.toLowerCase().trim()
    }

    @BeforeUpdate()
    checkFieldBeforeUpdate(){
        this.checkFieldBeforeInsert();
    }

    @OneToMany(
        () => Patient,
        (patient) => patient.user
    )
    patient: Patient
}
