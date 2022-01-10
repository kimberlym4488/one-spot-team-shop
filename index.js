const inquirer = require('inquirer');
const fs = require('fs');
const jest = require ('jest')
const HTMLtemplate = require("./dist/generateHTML")
const classes = require("./lib/classes")

 async function init() {
     
    inquirer.prompt(prompts);

    try{
        const name = await inquirer.prompt(getName())
        //Handle response data
        const id = await inquirer.prompt(getID());

        const email = await inquirer.prompt(getEmail());

    }
    catch (err) {
        //Handle Error
    }

}

// When you're done
prompts.complete();

init();