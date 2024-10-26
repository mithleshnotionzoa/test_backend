import { Login } from '../../login/entities/login.entity';
import { Project } from '../../project/entities/project.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column()
  payload: string;

  @Column()
  device_info: string;

  @Column()
  ip_address: string;

  @Column()
  current_url: string;

  @OneToOne(() => Project, (project) => project.log, {
    onDelete: 'CASCADE', // Delete tokens if the associated user is deleted
    onUpdate: 'CASCADE', // Update token's foreign key if the user's ID is updated
  })
  @JoinColumn({ name: 'projectId', referencedColumnName: 'id' })
  project: Project;

  @Column()
  projectId: number;

  @Column()
  project_token: string;

  @Column()
  endpoint: string;

  @ManyToOne(() => Login, (login) => login.logs)
  @JoinColumn({ name: 'loginId', referencedColumnName: 'id' })
  login: Login;

  @Column()
  loginId: number;
}
