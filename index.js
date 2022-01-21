const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest')
const HTMLtemplate = require("./src/generateHTML")
const Employee = require("./lib/employee")
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const questionsMan = require('./lib/questionsMan')
const questionsEng = require('./lib/questionsEng')
const questionsIntern = require('./lib/questionsIntern')
const employees = [];

//loop over stored employees to build an html page that includes all of their information. 

async function askForManagerInfo() {

    try {

        const answers = await inquirer
            .prompt
            (questionsMan)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.phoneNumber)
        console.log(answers)
        //create and store an object for the manager
        employees.push(manager//pass in data from inquirer);
        )
        //ask what they would like to do next
        menu();
    }

    catch (error) {
        console.log(error);
    }
}

async function menu() {

    try {

        const answers = await inquirer
            .prompt
            ([
                {
                    type: "list",
                    name: "next",
                    message: "Who should we add next?",
                    choices: ["Engineer", "Intern", "I'm done"]
                }
            ])

        if (answers.next === "Engineer") {
            askForEngineerInfo();
        }

        //create and store an object for the manager
        else if (answers.next === "Intern") {
            askForInternInfo();
        }

        else {
            console.log(employees)

            fs.writeFile('./dist/team.HTML', HTMLtemplate(employees),
                (err) =>
                    err ? console.error(err) : console.log('Success! Your team.html page is now ready to be viewed!'))
            //pass in data from inquirer);
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function askForEngineerInfo() {

    try {

        const answers = await inquirer
            .prompt
            (questionsEng)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        //create and store an object for the manager
        console.log(answers)
        employees.push(engineer)//pass in data from inquirer);

        //ask what they would like to do next
        menu();
    }

    catch (error) {
        console.log(error);
    }
}

async function askForInternInfo() {

    try {

        const answers = await inquirer
            .prompt
            (questionsIntern)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        //create and store an object for the manager
        employees.push(intern)//pass in data from inquirer);
        //ask what they would like to do next
        menu();
    }

    catch (error) {
        console.log(error);
    }
}

askForManagerInfo();