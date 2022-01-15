
const Employee = require("./employee");

//The other three classes below (Manager, Engineer, Intern) will extend Employee.

//In addition to Employee's properties and methods, Manager will also have the following:

class Manager extends Employee{
  
    constructor( phoneNumber, name, id, email ){

        super( name, id, email )
        this.phoneNumber = phoneNumber
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return "Manager"
    }
    //—overridden to return 'Manager'
}

module.exports = Manager;
