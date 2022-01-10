const classes = name

id

email

getName()

getId()

getEmail()

getRole() //returns 'Employee'

//The other three classes will extend Employee.

//In addition to Employee's properties and methods, Manager will also have the following:

officeNumber

getRole()//—overridden to return 'Manager'

//In addition to Employee's properties and methods, Engineer will also have the following:

github//GitHub username

getGithub()

getRole()//—overridden to return 'Engineer'

//In addition to Employee's properties and methods, Intern will also have the following:

school

getSchool()

getRole()//—overridden to return 'Intern'

//Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
module.exports = classes