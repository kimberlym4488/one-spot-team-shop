const Employee = require("../lib/employee")

//positive tests - testing object properties after things have been constructed. Should throw an error ifprovided no arguments. 
//should create object with a name and age.
//describe each function and return values you are getting for each employee, engineer, manager, intern

describe("Employee", () => {

    //Methods
    describe("Initialization", () => {

    //testing of the object properties after constructing a new instance
        it("should return the user entered name value for the name parameter", () => {
            //Arrange, create a new employee object
                const employee = new Employee(this.name)
                employee.name = "Tabitha Jones"
           //Act
        //Call the getName method and store the result
            let result = employee.getName

             //Assert
        //The result is equal to an expected value.

        if (result = employee.name){
            console.log(`${result} is equal to ${employee.name}`)
            }
        });
    })
        
})
/*    //Methods
    describe("getName", () => {
        it ("should build with these properties", () =>{

        })
        
        
    })
    describe("getName", () => {
        it ("should build with these properties", () =>{
            
        })
        //Arrange
        //Create a new Employee object

        //Act
        //Call the getName method and store the result

        //Assert
        //The result is equal to an expected value.
        

    })
    describe("getName", () => {
           it ("should build with these properties", () =>{
            
        })
        

    })
    describe("getName", () => {
        it ("should build with these properties", () =>{
            
        })


    })
    describe("getName", () => {
        it ("should build with these properties", () =>{
            
        })

    })
    describe("getName", () => {
        it ("should build with these properties", () =>{
            
        })

    })
    
}*/