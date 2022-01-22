const Engineer = require("../lib/engineer")

describe("Engineer", () => {
//test methods and properties belonging to engineer - get(name, id, email, github, role))
    //Methods
    describe("getRole", () => {

        //testing of the object properties after constructing a new instance
        it("should pass through the entered name when getName is called", () => {
            //Arrange, create a new Engineer object
            const engineer = new Engineer("Kim", "56897", "kim@comcast.net", "kimberlym4488")

            //Act
            //Call the getName method and store the result
            const engRole = engineer.getRole();

            //Assert
            //The result is equal to an expected value.
            expect(engRole).toEqual("Engineer")
        });
    })

    describe("getName", () => {
        it("should pass through the stored ID when getID is called", () => {

            const engineer = new Engineer("Kim", "56897", "kim@comcast.net", "kimberlym4488")

            const engName = engineer.getName();

            expect(engName).toEqual("Kim")
        });
    })
    //Methods
    describe("getID", () => {
        it("should pass through the stored ID when getID is called", () => {

            const engineer = new Engineer("Kim", "56897", "kim@comcast.net", "kimberlym4488")

            const engID = engineer.getID();

            expect(engID).toEqual("56897")
        });
    })

    describe("getEmail", () => {

        it("should pass through the stored email when method getEmail is called", () => {

            const engineer = new Engineer("Kim", "56897", "kim@comcast.net", "kimberlym4488")

            const engEmail = engineer.getEmail();

            expect(engEmail).toEqual("kim@comcast.net")
        });
    })
    describe("getGithub", () => {

        it("should pass through the stored email when method getGithub is called", () => {
            const engineer = new Engineer("Kim", "56897", "kim@comcast.net", "kimberlym4488")

            const engGithub = engineer.getGithub();

            expect(engGithub).toEqual("kimberlym4488")
        });
    })
})