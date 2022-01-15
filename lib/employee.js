class Employee {

    constructor (name, id, email){
      this.name=name;
      this.id = id;
      this.email = email;
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

}
//returns 'Employee'
module.exports=Employee

//console.log(employee);


/*
let array = [];//array literal syntax. If we didn't have this we would have to instantiate a new Array. 
let arr = new Array(15,20,30,35)
let number = new Number(7);//to hold our argument to our number class function. 
console.log(number)
console.log(arr [0])*/