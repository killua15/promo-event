require("dotenv").config();

module.exports = {
  username: "dttntnrujrdohu",
  password: "52694ab2ae65dbd126d7a3b8b3ecca52079e01fe2d71fc762e99c23df9d98aaf",
  database: "d7qjlql1cshdf7",
  port: 5432,
  host: "ec2-34-233-214-228.compute-1.amazonaws.com",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },

  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  migrationStore: "sequelize",
  migrationStoreTableName: "migrations",
};
