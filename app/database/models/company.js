'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.belongsTo(models.System),
      Company.hasMany(models.Department)
    }
  };
  Company.init({
    systemId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    address: DataTypes.STRING,
    url: DataTypes.STRING,
    phone: {
      type:DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    company_pic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
    tableName: 'companies',
  });
  return Company;
};