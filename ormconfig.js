require("dotenv").config();
module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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
