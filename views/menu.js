const colors = require("colors");
const inquirer = require("inquirer");
const cmd = require("../controller/cmd");
const db = require("../controller/db");

async function start() {
  do {
    const answers = await inquirer.prompt({
      type: "list",
      name: "menu",
      message:
        `
 ,_____ __  __  _____ _     
/  ____| \ \\/  |/ ____(_) ` +
        `   
| |    | \\  / | (___  _ ___ 
| |    | |\\/| |\\___ \\| / __|`.cyan +
        `
| |____| |  | |____) | \\__ \\
'\\_____|_|  |_|_____/| |___/
                   _/  |    
                   |__/   `.magenta +
        `By: `.blue +
        `rok` +
        `ett`.cyan +
        `eere`.magenta +
        "\n=============================".cyan,
      choices: [
        {
          name: "view all departments".bgMagenta.black.bold,
          value: "view all departments",
        },
        {
          name: "view all roles".bgMagenta.black.bold,
          value: "view all roles",
        },
        {
          name: "view all employees".bgMagenta.black.bold,
          value: "view all employees",
        },
        {
          name: "add a department".bgMagenta.black.bold,
          value: "add a department",
        },
        { name: "add a role".bgMagenta.black.bold, value: "add a role" },
        {
          name: "add an employee".bgMagenta.black.bold,
          value: "add an employee",
        },
        {
          name: "update an employee role".bgMagenta.black.bold,
          value: "update an employee",
        },
        { name: "Exit".bgMagenta.black.bold, value: "exit" },
      ],
      loop: false,
    });

    switch (answers.menu) {
      case "view all departments":
        db(cmd.allDepartments());
        break;
      case "view all roles":
        db(cmd.allRoles());
        break;
      case "view all employees":
        db(cmd.allEmployees());
        break;
      case "add a department":
        const newDepartment = await inquirer.prompt({
          type: "input",
          name: "department",
          message: "department name?",
        });
        db(cmd.addDepartment(newDepartment.department));
        break;
      case "add a role":
        const { title } = await inquirer.prompt({
          type: "input",
          name: "title",
          message: "role title?",
        });
        const { salary } = await inquirer.prompt({
          type: "number",
          name: "salary",
          message: "role salary?",
        });
        const { departmentId } = await inquirer.prompt({
          type: "number",
          name: "departmentId",
          message: "department id?",
        });
        db(cmd.addRole(title, salary, departmentId));
        break;
      case "add an employee":
        const { first } = await inquirer.prompt({
          type: "input",
          name: "first",
          message: "first name?",
        });
        const { last } = await inquirer.prompt({
          type: "input",
          name: "last",
          message: "last name?",
        });
        const { roleId } = await inquirer.prompt({
          type: "number",
          name: "roleID",
          message: "Role ID?",
        });
        const { managerId } = await inquirer.prompt({
          type: "number",
          name: "managerID",
          message: "manager id?",
        });
        db(cmd.addEmployee(first, last, roleId, managerId));
        break;
      case "update an employee":
        const { employee_id } = await inquirer.prompt({
          type: "number",
          name: "employee_id",
          message: "employee id?",
        });
        const { role_id } = await inquirer.prompt({
          type: "number",
          name: "role_id",
          message: "role id?",
        });
        db(cmd.updateEmployeeRole(employee_id, role_id));
        break;
      case "exit":
        process.exit(0);
    }
  } while (true);
}

module.exports = start;
