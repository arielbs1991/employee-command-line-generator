const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

const answerValidator = async (input) => {
    if (input === ''){
        console.log('Oh no! Please enter your answer.');
    }else {
        return true;
    }
}
function teamQuestions() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["Add an Engineer", "Add the Manager", "Add an Intern", "Generate Team"]
    }).then(function ({ choice }) {
        switch (choice) {
            case "Add the Manager":
                let [hasManager] = employees.filter(emp => emp.officeNumber)
                console.log("do we have a manager?", hasManager);
                if (hasManager) {
                    console.log("You already have a manager!");
                    teamQuestions();

                    break;
                }
                else {
                    createManager();
                    break;
                }

            case "Add an Engineer":
                createEngineer();
                break;

            case "Add an Intern":
                createIntern();
                break;

            case "Generate Team":
                let [hasTeam] = employees.filter(emp => emp.name)
                console.log("do we have a team", hasTeam)
                if (hasTeam) {
                    console.log("Generating your team page!");
                    console.log(employees);
                    fs.writeFile(outputPath, render(employees), function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("Successfully Written TeamPage, check your output folder");
                    })
                    break;
                } else {
                    console.log("You don't have anyone on your team! Please add at least one employee.");
                    teamQuestions();
                }
            default:
                break;
        }
    })
}

async function createManager() {
    await inquirer.prompt([
        {
            type: "input",
            message: "Please enter Manager's name:",
            name: "name",
            validate: answerValidator
        },
        {
            type: "input",
            message: "Please enter Manager's ID:",
            name: "id",
            validate: answerValidator
        },
        {
            type: "input",
            message: "Please enter Manager's email:",
            name: "email",
            validate: answerValidator
        },
        {
            type: "input",
            message: "Please enter Manager's office number",
            name: "officeNumber",
            validate: answerValidator
        }
    ]).then(function (answers) {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
        console.log(employees);
        teamQuestions();
    })
}

async function createEngineer() {
    await inquirer.prompt([
        {
            type: "input",
            message: "Please enter Engineer's name:",
            name: "name",
            validate: answerValidator
        },
        {
            type: "input",
            message: "Please enter Engineer's ID:",
            name: "id",
            validate: answerValidator
        },
        {
            type: "input",
            message: "Please enter Engineer's email:",
            name: "email",
            validate: answerValidator
        },
        {
            type: "input",
            mesage: "Please enter Engineer's github username",
            name: "github",
            validate: answerValidator
        }
    ]).then(function (answers) {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        console.log(employees);
        teamQuestions();
    })
}
async function createIntern() {
    await inquirer.prompt([
        {
            type: "input",
            message: "Please enter Intern's name:",
            name: "name",
            validate: answerValidator
        },
        {
            type: "input",
            message: "Please enter Intern's ID:",
            name: "id",
            validate: answerValidator
        },
        {
            type: "input",
            message: "Please enter Intern's email:",
            name: "email",
            validate: answerValidator
        },
        {
            type: "input",
            message: "Please enter Intern's school",
            name: "school",
            validate: answerValidator
        }
    ]).then(function (answers) {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(intern);
        console.log(employees);
        teamQuestions();
    })
}
teamQuestions();
//if (manager !== "") console.log("you already have your manager!") and return to teamQuestions
//how to check if something is in an array

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
