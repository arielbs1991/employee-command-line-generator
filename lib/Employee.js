// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return inquirer.prompt(
            {
                type: "input",
                message: "Please enter employee name:",
                name: "name"
            }
        )
    }

    getId() {
        return inquirer.prompt(
            {
                type: "input",
                message: "Please enter employee ID:",
                name: "id"
            }
        )
    }

    getEmail() {
        return inquirer.prompt(
            {
                type: "input",
                message: "Please enter employee email:",
                name: "email"
            }
        )
    }

    getRole() {
        inquirer.prompt(
            {
                type: "list",
                message: "What kind of employee is this?",
                choices: ["Engineer", "Intern", "Manager"],
                name: "role"
            }
        )
    }
}
getName()
.then(function(answers) {
  console.log(answers)
  })
  .then(function() {
    
  })
  .catch(function(err) {
    console.log(err);
  });