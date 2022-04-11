//en typeORM, las entidades se definen en clases
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

//descomentar en tsconfig experimentalDecorators y strictPropertyInitialization

@Entity()//tabla en BBDD
export class User extends BaseEntity {
    //columnas en la BBDD
    @PrimaryGeneratedColumn()   //se autoincrementa
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({   //le puedo agregar propiedades como default, unique, required, etc
        default: true
    })
    active: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}
