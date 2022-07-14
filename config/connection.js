// Import the Sequelize constructor from the library
const Sequelize = require("sequelize");

require("dotenv").config();

// Create connection to our database, pass in your MySQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("tech_blog_db", "root", "Mncx22..", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });
}

module.exports = sequelize;
