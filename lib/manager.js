
const Employee = require("./employee");

//In addition to Employee's properties and methods, Manager will also have the following:

class Manager extends Employee{
  
    constructor( phoneNumber, name, id, email ){

        super( name, id, email )
        this.phoneNumber = phoneNumber
    }

    getOfficeNumber(){
        return this.phoneNumber
    }

    getRole(){
        return "Manager"
    }
    //—overridden to return 'Manager'
}

module.exports = Manager;
