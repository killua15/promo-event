'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Picture.belongsTo(models.Product,{foreignKey:'productId'})
    }
  };
  Picture.init({
    productId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    name: DataTypes.STRING,
    url: {
      type:DataTypes.STRING,
      allowNull:false
    },
    status: {
      type:DataTypes.BOOLEAN,
      defaultValue:true
    },
  }, {
    sequelize,
    modelName: 'Picture',
    tableName:'pictures'
  });
  return Picture;
};