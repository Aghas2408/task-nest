import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { Role } from '../role/role.entity';
import { UserController } from './user.controller';

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
