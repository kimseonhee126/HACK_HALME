'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HALME_USERS_V2s extends Model {}
  HALME_USERS_V2s.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userName: DataTypes.STRING,
      userPhone: DataTypes.STRING,
      userAddress: DataTypes.STRING,
      userPoint: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userCart: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }, 
    {
      sequelize,
      modelName: 'HALME_USERS_V2s',
    }
  );
  return HALME_USERS_V2s;
};