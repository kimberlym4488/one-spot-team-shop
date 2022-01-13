class Employee {

    constructor (name, id, email, role){
      this.name=name;
      this.id = id;
      this.email = email;
      this.role = role;
    }

    getName(){
        return this.name;
    }

    getID(){
        return this.ID;
    }

    getEmail(){
        return this.Email;
    }
   
}
//returns 'Employee'
module.exports=Employee