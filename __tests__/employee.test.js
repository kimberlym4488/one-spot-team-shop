const Employee = require("../lib/employee")
//test 4 methods belonging to employee - get(name, id, email, role))
describe("Employee", () => {

    describe("getRole", () => {

        //testing of the object properties after constructing a new instance
        it("should pass through role when getRole is called", () => {
            //Arrange, create a new employee object
            const employee = new Employee("Kim", "56897", "kim@comcast.net")

            //Act
            //Call the getRole method and store the result
            const empName = employee.getRole();

            //Assert
            //The result is equal to an expected value.
            expect(empName).toEqual("Employee")
        });
    })
    describe("getID", () => {

        it("should pass through the stored ID when getID is called", () => {
            const employee = new Employee("Kim", "56897", "kim@comcast.net")

            const empID = employee.getID();

            expect(empID).toEqual("56897")
        });
    })

    describe("getEmail", () => {

        it("should pass through the stored email when method getEmail is called", () => {

            const employee = new Employee("Kim", "56897", "kim@comcast.net")

            const empEmail = employee.getEmail();

            expect(empEmail).toEqual("kim@comcast.net")
        });
    })
})