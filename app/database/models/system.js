'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class System extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      System.hasMany(models.Company,{
        as:'companies',
        foreignKey:'systemId'
      })
    }
  };
  System.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    status: {
      type:DataTypes.BOOLEAN,
      defaultValue:true
    },
    updatedUser: {
      type:DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'System',
    tableName:'systems'
  });
  return System;
};