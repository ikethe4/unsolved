// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************


const Sequelize = require("sequelize");

const sequelize = new Sequelize("starwars", "root", "@nsel64@dams", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
    });

// Exporting our connection
module.exports = sequelize;
