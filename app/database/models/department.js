'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       Department.belongsTo(models.Company,{
        foreignKey:'companyId'
       });
       Department.hasMany(models.Category,{
        as:'categories',
        foreignKey:'departmentId'
       })
    }
  }
  Department.init({
    companyId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'companies',
        key:'id'
      }
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'departments',
  });
  return Department;
};