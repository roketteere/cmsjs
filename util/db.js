const colors = require("colors");
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "cms_db",
});

const itemToWorkOn = 4;
connection.query("DESCRIBE departments", (err, result) => {
  console.log(result);
});
