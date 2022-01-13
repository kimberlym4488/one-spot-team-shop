
const Employee = require("./employee");

//The other three classes below (Manager, Engineer, Intern) will extend Employee.

//In addition to Employee's properties and methods, Manager will also have the following:

class Manager extends Employee{
  
    constructor(officeNumber){

       this.officeNumber = officeNumber
       super( name, id, email,role )
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole = () => "Manager"
    getName = () => this.name
    getid = () => this.id
    getEmail = () => this.email

    }
    
    //—overridden to return 'Manager'
}

module.exports = Manager;