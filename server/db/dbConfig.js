const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createPool({
  // host: "localhost",
  // user: "evangadi-admin",
  // password: process.env.PASSWORD,
  // database: process.env.DATABASE,
  // port: 3307,
  host: "82.197.82.82",
  user: "u810119600_evangadiadmin",
  password: process.env.PASSWORD,
  database: u810119600_evangadpractic,
  port: 3307,
});

module.exports = db.promise();
