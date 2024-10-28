import { DataSource, DataSourceOptions } from 'typeorm';
// import { Login } from './login/entities/login.entity';
// import { Category } from './category/entities/category.entity';
// import { Log } from './log/entities/log.entity';
// import { Project } from './project/entities/project.entity';
// import { ProjectHostRule } from './project-host-rule/entities/project-host-rule.entity';
// import { Token } from './token/entities/token.entity';
// import { Activity } from './activity/entities/activity.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const appDataSource: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: parseInt(process.env.DATABASE_PORT),
  username: 'root',
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/src/migrations/*.js'],
  synchronize: true,
  cache: false,
};

export const dataSource = new DataSource(appDataSource);
