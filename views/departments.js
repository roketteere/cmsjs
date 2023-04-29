const colors = require("colors");
const inquirer = require("inquirer");

async function departments() {
  const answer = await inquirer.prompt({
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
      "view all departments".bgMagenta.black.bold,
      "view all roles".bgMagenta.black.bold,
      "view all employees".bgMagenta.black.bold,
      "add a department".bgMagenta.black.bold,
      "add a role".bgMagenta.black.bold,
      "add an employee".bgMagenta.black.bold,
      "update an employee role".bgMagenta.black.bold,
      "Exit".bgMagenta.black.bold,
    ],
    loop: false,
  });
  return answer;
}

module.exports = departments;
