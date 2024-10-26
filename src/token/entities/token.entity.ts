import { Login } from '../../login/entities/login.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  live_token: string;

  @ManyToOne(() => Login, (login) => login.tokens, {
    onDelete: 'CASCADE', // Delete tokens if the associated user is deleted
    onUpdate: 'CASCADE', // Update token's foreign key if the user's ID is updated
  })
  @JoinColumn({ name: 'loginEmail', referencedColumnName: 'email' })
  login: Login;

  @Column()
  loginEmail: string;
}
