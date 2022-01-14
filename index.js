const inquirer = require('inquirer');
const fs = require('fs');
const jest = require ('jest')
const HTMLtemplate = require("./dist/generateHTML")
const Employee= require("./lib/employee")
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/engineer')
const questions = require('../questions')
const employees = [];
const interns = [];

//push to list of employees
/*function askForManagerInfo() {
    inquirer
    .prompt()
    .then((answers) => {
        //create and store an object for the manager
        employees.push( new Manager(//pass in data from inquirer);
        //ask what they would like to do next
        askforwhattodonext()
        ))
    })
}*/

//loop over stored employees to build an html page that includes all of their information. 


async function askForManagerInfo() {

    try {
         
    const answers = await inquirer.prompt(questions
         )
         console.log(answers);
        //create and store an object for the manager
        employees.push( new Manager(//pass in data from inquirer);
        //ask what they would like to do next
       // askForNextAction()
        ))
    }
    catch (error) {
        console.log(error);
    }
}


async function menu() {

    try {
         
    const answers = await inquirer.prompt(questions
         )
         console.log(answers);
        //create and store an object for the manager
        employees.push( new Manager(//pass in data from inquirer);
        //ask what they would like to do next
       // askForNextAction()
        ))
    }
    catch (error) {
        console.log(error);
    }
}

/*function askForNextAction() {
    askForManagerInfo();
}*/

// When you're done
//prompts.complete();
askForManagerInfo();
menu();