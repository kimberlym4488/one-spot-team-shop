
const Employee = require("./employee");

//The other three classes below (Manager, Engineer, Intern) will extend Employee.

//In addition to Employee's properties and methods, Manager will also have the following:

class Manager extends Employee{
  
    constructor(officeNumber, name, id, email){

        super( name, id, email)
        this.officeNumber = officeNumber
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

const manager = new Manager("509-324-0640", "Jim", "15", "comssdfldjfmanager")