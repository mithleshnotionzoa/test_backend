// import { Catch } from '@nestjs/common';
import { Log } from '../../log/entities/log.entity';
import { Category } from '../../category/entities/category.entity';
import { Login } from '../../login/entities/login.entity';
import { ProjectHostRule } from '../../projecthostrule/entities/projecthostrule.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  project_name: string;

  @Column()
  project_description: string;

  @Column()
  script_type: string;

  @ManyToOne(() => Login, (login) => login.projects, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'loginId', referencedColumnName: 'id' })
  login: Login;

  @Column()
  loginId: number;

  @Column()
  token: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Category, (category) => category.projects)
  category: Category;

  @OneToOne(() => Log, (log) => log.project, {
    onDelete: 'CASCADE', // Delete tokens if the associated user is deleted
    onUpdate: 'CASCADE', // Update token's foreign key if the user's ID is updated
  })
  log: Log;

  // @Column()
  // logId: number;

  @ManyToOne(
    () => ProjectHostRule,
    (projecthostrule) => projecthostrule.projects,
  )
  hostrule: ProjectHostRule;
}
