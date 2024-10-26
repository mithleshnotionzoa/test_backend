import { Project } from '../../project/entities/project.entity';
import { Activity } from '../../activity/entities/activity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Token } from '../../token/entities/token.entity';
import { Log } from '../../log/entities/log.entity';

@Entity()
export class Login {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Activity, (activity) => activity.login)
  activities: Activity[];

  @OneToMany(() => Project, (project) => project.login)
  projects: Project[];

  @OneToMany(() => Token, (token) => token.login)
  tokens: Token[];

  @OneToMany(() => Log, (log) => log.login)
  logs: Log[];
}
