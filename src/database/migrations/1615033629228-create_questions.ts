import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createQuestions1615033629228 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "questions",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "text",
            type: "text",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "is_answered",
            type: "boolean",
            default: "false",
          },
          {
            name: "user_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "QuestionUser",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("questions");
  }
}
