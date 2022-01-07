"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.Artist, { foreignKey: "artistId" });
      Event.hasOne(models.Location, {
        as: "location",
        foreignKey: "idEvent",
      });
    }
  }
  Event.init(
    {
      artistId: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      flayer: { type: DataTypes.BLOB, allowNull: false },
      place: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      cover: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING },
      date: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "Event",
      tableName: "events",
    }
  );
  return Event;
};
