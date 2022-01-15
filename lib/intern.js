
const Employee = require("./employee");

//The other three classes below (Manager, Engineer, Intern) will extend Employee.

//In addition to Employee's properties and methods, Intern will also have the following:
class Intern extends Employee{
  
        constructor( school, name, id, email ){
    
            super( name, id, email );
            this.school = school;
        }
    
        getSchool(){
            return this.school
        }
    
        getRole() {
            return "Intern";
        }
    
        //—overridden to return 'Intern'
}
//Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
module.exports = Intern;

//const intern =  new Intern("UW", "Mike", 15, "comcast.net");
//console.log(intern.getName());