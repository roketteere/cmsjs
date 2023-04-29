const colors = require("colors");
const cTable = require("console.table");
const departments = require("../views/departments");
const employees = require("../views/employees");
const menu = require("../views/menu");
const roles = require("../views/roles");

const cases = [
  "view all departments".bgMagenta.black.bold,
  "view all roles".bgMagenta.black.bold,
  "view all employees".bgMagenta.black.bold,
  "add a department".bgMagenta.black.bold,
  "add a role".bgMagenta.black.bold,
  "add an employee".bgMagenta.black.bold,
  "update an employee role".bgMagenta.black.bold,
  "Exit".bgMagenta.black.bold,
];

async function switchUtil(switchCase) {
  switch (switchCase.toLowerCase()) {
    case cases[0]:
      console.log(cases[0]);
      break;
    case cases[1]:
      console.log(cases[1]);
      break;
    case cases[2]:
      console.log(cases[2]);
      break;
    case cases[3]:
      console.log(cases[3]);
      break;
    case cases[4]:
      console.log(cases[4]);
      break;
    case cases[5]:
      console.log(cases[5]);
      break;
    case cases[6]:
      console.log(cases[6]);
      break;
    case cases[7]:
      console.log(cases[7]);
      break;
    default:
      console.log(`Area Not Found : ${switchCase}`.bgBlack.red);
  }
}

module.exports = { cases, switchUtil };
