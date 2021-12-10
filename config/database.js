require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_DATABASE || "postEvents",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "postgres",

  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  migrationStore: "sequelize",
  migrationStoreTableName: "migrations",
};
