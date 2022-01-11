
const employee = require("./employee")

//The other three classes below (Manager, Engineer, Intern) will extend Employee.

//In addition to Employee's properties and methods, Intern will also have the following:
class Intern{
    getSchool(intern){

    }
    getRole(intern){
        //—overridden to return 'Intern'
    }
}
//Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
module.exports = Intern;