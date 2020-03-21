import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({name: 'auth_domain'})
export class AuthDomainEntity {

    @PrimaryColumn()
    id: number;

    @Column()
    domain: string;

    @Column()
    commentaire: string;
}
