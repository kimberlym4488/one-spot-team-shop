const Intern = require("../lib/intern")

describe("Intern", () => {
//test methods and properties belonging to intern - get(name, id, email, school, role))
    
    describe("getRole", () => {

        //testing of the object properties after constructing a new instance
        it("should pass through the entered name when getName is called", () => {
            //Arrange, create a new Intern object
            const intern = new Intern("Kim", "56897", "kim@comcast.net", "Eastern Washington University")

            //Act
            //Call the getName method and store the result
            const intRole = intern.getRole();

            //Assert
            //The result is equal to an expected value.
            expect(intRole).toEqual("Intern")
        });
    })

    describe("getName", () => {
        it("should pass through the stored ID when getID is called", () => {

            const intern = new Intern("Kim", "56897", "kim@comcast.net", "Eastern Washington University")

            const intName = intern.getName();

            expect(intName).toEqual("Kim")
        });
    })

    describe("getID", () => {
        it("should pass through the stored ID when getID is called", () => {

            const intern = new Intern("Kim", "56897", "kim@comcast.net", "Eastern Washington University")

            const intID = intern.getID();

            expect(intID).toEqual("56897")
        });
    })

    describe("getEmail", () => {

        it("should pass through the stored email when method getEmail is called", () => {

            const intern = new Intern("Kim", "56897", "kim@comcast.net", "Eastern Washington University")

            const intEmail = intern.getEmail();

            expect(intEmail).toEqual("kim@comcast.net")
        });
    })
    describe("getSchool", () => {

        it("should pass through the stored email when method getSchool is called", () => {
            const intern = new Intern("Kim", "56897", "kim@comcast.net", "Eastern Washington University")

            const intSchool = intern.getSchool();

            expect(intSchool).toEqual("Eastern Washington University")
        });
    })
})