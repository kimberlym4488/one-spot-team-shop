
const Employee = require("./employee");
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
module.exports = Intern;

//testing
//const intern =  new Intern("UW", "Mike", 15, "comcast.net");
//console.log(intern.getName());