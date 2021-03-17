require("dotenv").config();
module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  migrations: ["dist/database/migrations/*.js"],
  entities: ["dist/app/models/*.js"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/database/migrations",
    subscribersDir: "src/subscriber",
  },
};
