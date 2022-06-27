import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BeforeInsert } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  SUPERVISOR = 'supervisor',
  USER = 'user',
  GUEST = 'guest'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({type: 'enum', enum: UserRole})
  role: UserRole;

  @BeforeInsert()
  emailTOLoweCase() {
    this.email = this.email.toLowerCase();
  }
}
