const questionsIntern = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the Interns name?',
    validate: function (input) {

      if (input.match(/\d/) || input.length === 0) {
        // Pass a user message value in the false callback 
        return "Provide a name with letters only. Thanks!"
          ;
      }
      // Pass the return value as true to move on to the next question.
      return true;
    },
  },

  {
    type: 'input',
    name: 'id',
    message: 'What is the Interns ID number?',
    validate: function (input) {

      if (!input.match(/^\d+$/) || input.length === 0) {
        return "Provide numbers only. Thanks!";
      }
      return true
    },
  },

  {
    type: 'input',
    name: 'email',
    message: 'What is the Interns email?',
    validate: function (input) {

      if (!input.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)) {
        return "Provide a proper email address. Thanks!";
      }
      return true;
    },
  },

  {
    type: 'input',
    name: 'school',
    message: 'Which school does the intern attend?',
    validate: function (input) {

      if (input.length === 0) {
        return "Please enter a github user name. Thanks!";
      }
      return true;
    },
  }
]

module.exports = questionsIntern


