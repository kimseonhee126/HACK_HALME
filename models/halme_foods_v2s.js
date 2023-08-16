'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HALME_FOODS_V2s extends Model {}
  HALME_FOODS_V2s.init(
    {
      foodTypeId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      foodName: DataTypes.STRING,
      foodPrice: DataTypes.INTEGER,
      foodCategory: DataTypes.STRING,
      foodImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'HALME_FOODS_V2s',
    }
  );
  return HALME_FOODS_V2s;
};