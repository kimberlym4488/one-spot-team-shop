
const Employee = require("../lib/employee")

//The other three classes below (Manager, Engineer, Intern) will extend Employee.
//In addition to Employee's properties and methods, Engineer will also have the following:

class Engineer extends Employee{
    constructor(github){

        this.github = github;
        super(name,id,email,role);

        //you must call the super method before accessing the super function properties. 
        //calling employees constructor - redefining/importing it. 
    }

    getGithub(){
        return this.github;
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    //GitHub username
    getRole(){
        return "Engineer";
    }

}//—overridden to return 'Engineer'

//Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

module.exports = Engineer