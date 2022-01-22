const Manager = require("../lib/manager")

describe("Manager", () => {
//test methods and properties belonging to manager - get(name, id, email, office number, role))
    
    describe("getRole", () => {

        //testing of the object properties after constructing a new instance
        it("should pass through the entered name when getName is called", () => {
            //Arrange, create a new Manager object
            const manager = new Manager("Kim", "56897", "kim@comcast.net", "509-324-0640")

            //Act
            //Call the getName method and store the result
            const manRole = manager.getRole();

            //Assert
            //The result is equal to an expected value.
            expect(manRole).toEqual("Manager")
        });
    })

    describe("getName", () => {
        it("should pass through the stored ID when getID is called", () => {

            const manager = new Manager("Kim", "56897", "kim@comcast.net", "509-324-0640")

            const manName = manager.getName();

            expect(manName).toEqual("Kim")
        });
    })

    describe("getID", () => {
        it("should pass through the stored ID when getID is called", () => {

            const manager = new Manager("Kim", "56897", "kim@comcast.net", "509-324-0640")

            const manID = manager.getID();

            expect(manID).toEqual("56897")
        });
    })

    describe("getEmail", () => {

        it("should pass through the stored email when method getEmail is called", () => {

            const manager = new Manager("Kim", "56897", "kim@comcast.net", "509-324-0640")

            const manEmail= manager.getEmail();

            expect(manEmail).toEqual("kim@comcast.net")
        });
    })
    describe("getOfficeNumber", () => {

        it("should pass through the stored email when method getOfficeNumber is called", () => {
            const manager = new Manager("Kim", "56897", "kim@comcast.net", "509-324-0640")

            const manPhone = manager.getOfficeNumber();

            expect(manPhone).toEqual("509-324-0640")
        });
    })
})