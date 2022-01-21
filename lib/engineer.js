
const Employee = require("./employee")

//In addition to Employee's properties and methods, Engineer will also have the following:

class Engineer extends Employee {
    constructor( name, id, email, github ) {

        super(name, id, email);
        this.github = github;

        //you must call the super method before accessing the super function properties. 
        //calling employees constructor - redefining/importing it. 
    }

    getGithub() {
        return this.github;
    }
    //GitHub username
    getRole() {
        return "Engineer";
    }

}//—overridden to return 'Engineer'

module.exports = Engineer

