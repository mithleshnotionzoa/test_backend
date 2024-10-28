import { MigrationInterface, QueryRunner } from 'typeorm';

export class Src1728472594321 implements MigrationInterface {
  name = 'Src1728472594321';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`endpoint\``);
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD \`endpoint\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`endpoint\``);
    await queryRunner.query(
      `ALTER TABLE \`project\` ADD \`endpoint\` varchar(255) NOT NULL`,
    );
  }
}
