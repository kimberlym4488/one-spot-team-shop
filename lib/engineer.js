
const employee = require("./employee")

//The other three classes below (Manager, Engineer, Intern) will extend Employee.
//In addition to Employee's properties and methods, Engineer will also have the following:

class Engineer{
    constructor(employee){
        this.name=name;
        this.ID=ID;
        this.email=email
    }
    getGithub(username){
    }
    //GitHub username
    getRole(Engineer){
    }//—overridden to return 'Engineer'
}
//Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
module.exports = Engineer