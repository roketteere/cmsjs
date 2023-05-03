const mysql = require("mysql2/promise");
const cTable = require("console.table");
const colors = require("colors");

// async function to send custom query commands
async function db(cmd) {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "cms_db",
  });
  const [row, fields] = await connection.query(cmd);
  console.clear();
  console.table("\nPRESS ANY ARROW KEY TO CONTINUE".bgWhite.red, row);
  connection.end();
}

module.exports = db;

// send(cmd.allDepartments());
// send(cmd.allRoles())
// send(cmd.allEmployees());
// send(cmd.addDepartment("education"));
// send(cmd.addRole("Developer", 222.99, 1));
// send(cmd.addEmployee("Joel", "Perez", 4, 1));
// send(cmd.updateEmployeeRole(4, 1));
