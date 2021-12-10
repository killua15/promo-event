"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.belongsTo(models.User, { foreignKey: "userId" });
      Artist.hasMany(models.Event, { as: "events", foreignKey: "artistId" });
    }
  }
  Artist.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      logo: DataTypes.STRING,
      pictures: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Artist",
      tableName: "artists",
    }
  );
  return Artist;
};
