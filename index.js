const inquirer = require('inquirer');
const fs = require('fs');
const jest = require ('jest')
const HTMLtemplate = require("./dist/generateHTML")
const Employee= require("./lib/employee")
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/engineer')
const questions = require('./lib/questions')


//push to list of employees
function askForManagerInfo() {
    inquirer
    .prompt()
    .then((answers) => {
        //create and store an object for the manager
        employees.push( new Manager(//pass in data from inquirer);
        //ask what they would like to do next
        askforwhattodonext()
        ))
    })
}

//loop over stored employees to build an html page that includes all of their information. 


async function askForManagerInfo() {

    const answers = await inquirer.prompt(/* questions */ )
        //create and store an object for the manager
        employees.push( new Manager(//pass in data from inquirer);
        //ask what they would like to do next
        askForNextAction()
        ))
}

function askForNextAction() {
    askForManagerInfo();
}

// When you're done
prompts.complete();