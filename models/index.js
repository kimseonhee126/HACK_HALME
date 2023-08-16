// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;


const Sequelize = require('sequelize');
const config = require('../config/config.json');

// const { username, password, database, host, dialect } = config.development;
const sequelize = new Sequelize('HALME_V2', 'root', 'wktlr011226!', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 8080,
});

const Users = require('./halme_users_v2s')(sequelize, Sequelize.DataTypes);
const Foods = require('./halme_foods_v2s')(sequelize, Sequelize.DataTypes);

const db = {};
db.Users = Users;
db.Foods = Foods;

module.exports = db;