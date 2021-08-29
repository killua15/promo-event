"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      movil: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
      }
    },
    {
      sequelize,
      modelName: "User",
      tableName:'users'
    }
  );
  return User;
};
