
//========================================================
// require('dotenv').config();

// const Sequelize = require('sequelize');
//========================================================



// create connection to our db
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     });


//========================================================
// const sequelize = new Sequelize(process.env.MYSQL_URL)
// module.exports = sequelize;
//========================================================

require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.MYSQL_URL);

module.exports = sequelize;