'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category)

    }
  };
  Product.init({
    categoryId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    name: DataTypes.STRING,
    price: {
      type:DataTypes.DOUBLE,
      allowNull:false
    },
    description: DataTypes.STRING,
    count: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
    },{
    sequelize,
    modelName: 'Product',
    tableName:'products'
  });
  return Product;
};