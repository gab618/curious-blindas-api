require("dotenv").config();
module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  migrations: ["src/database/migrations/*.ts"],
  entities: ["src/app/models/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/database/migrations",
    subscribersDir: "src/subscriber",
  },
};
