class cmd {
  constructor() {
    // WHEN? I choose to view all roles
    // THEN: I am presented with the:
    // SHOW > role:titles | role:id's | departments:itBelongsTo's | role:salaries
    this.allRoles = () =>
      `SELECT 
      role.title, 
      role.id AS role_id, 
      department.name AS department, 
      role.salary 
      FROM role 
      INNER JOIN department ON department.id = role.department_id;
`;

    // WHEN? I choose to view all employees
    // THEN: table showing:
    // SHOW > employee:id's | first:names | last:names
    // job:titles | department:itBelongsTo's | role:salaries | managers?NULL:(managers:id's)
    this.allEmployees = () =>
      `SELECT 
      employee.id AS id, 
      employee.first_name AS first_name,
      employee.last_name AS last_name, 
      role.title AS title,
      department.name AS department,
      role.salary AS salary,
      employee.manager_id AS manager 
      FROM employee 
      INNER JOIN department ON department.id = employee.role_id
      INNER JOIN role ON role.id = employee.role_id
      ;`;

    // WHEN? I choose to view all departments
    // THEN: I am presented with a formatted table showing:
    // SHOW > department:names | department:ids
    this.allDepartments = () => `SELECT name,id FROM department;`;

    // WHEN? I choose to add a department
    // THEN: I am prompted to:
    // INPUT:: departmentName
    // ADD++ departmentName => DataBase
    this.addDepartment = (name) =>
      `INSERT INTO department(name)
      VALUES ("${name}")`;

    // WHEN? I choose to add a role
    // THEN: I am prompted to enter the:
    // role:name | role:salary | role:department:id
    // ADD++ role=>DataBase;
    this.addRole = (title = "", salary = 0.0, department_id = 0) =>
      `INSERT INTO role(title,salary,department_id)
      VALUES ("${title}", ${salary}, ${department_id})`;

    // WHEN? I choose to add an employee
    // THEN: I am prompted to enter:
    // INPUT:: employee:first_name | employee:last_name |...
    // ...employee: role_id | employee: manager_id
    // ADD++ employee => DataBase;
    this.addEmployee = (
      first_name = "",
      last_name = "",
      role_id = 0,
      manager_id = 0
    ) =>
      `INSERT INTO employee(first_name,last_name,role_id,manager_id)
      VALUES ("${first_name}","${last_name}",${role_id},${manager_id})`;

    // WHEN I choose to update an employee role
    // THEN I am prompted to select an
    // employee to update and their new role
    // ++UDPATE-- employee.role_id => DataBase
    this.updateEmployeeRole = (employee_id, role_id) =>
      `UPDATE employee SET role_id = ${role_id} WHERE employee.id = ${employee_id}`;
  }
}

module.exports = new cmd();
