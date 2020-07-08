// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = () => {
            return this.name;
        };
        this.getId = () => {
            return this.id;
        };
        this.getEmail = () => {
            return this.email;
        };
        this.getRole = () => {
            return 'Employee';
        }
    }

};

// const e = new Employee("Alice", 100, "test@test.com")

module.exports = Employee;
// function getName() {
//     return inquirer.prompt(
//         {
//             type: "input",
//             message: "Please enter employee name:",
//             name: "name"
//         }
//     )
// }

// function getId() {
    // return inquirer.prompt(
    //     {
    //         type: "input",
    //         message: "Please enter employee ID:",
    //         name: "id"
    //     }
    // )
// }

// function getEmail() {
//     return inquirer.prompt(
//         {
//             type: "input",
//             message: "Please enter employee email:",
//             name: "email"
//         }
//     )
// }

// function getRole() {
//     inquirer.prompt(
//         {
//             type: "list",
//             message: "What kind of employee is this?",
//             choices: ["Engineer", "Intern", "Manager"],
//             name: "role"
//         }
//     )
// }

// getName()
//     .then(function (answers) {
//         console.log(answers)
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// getId()
//     .then(function (answers) {
//         console.log(answers)
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// getEmail()
//     .then(function (answers) {
//         console.log(answers)
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// getRole()
//     .then(function (answers) {
//         console.log(answers)
//     })
//     .catch(function (err) {
//         console.log(err);
//     });