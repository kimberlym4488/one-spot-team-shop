const questionsEng = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the Engineers name?',
    validate: function (input) {
  //validation function, modified from inquirer docs to fit this usage.

        if (input.match(/\d/) || input.length === 0) {
          // Pass the return value in the done callback ^\s+|\s+$
          return "Provide a name with letters only. Thanks!";
        }
        else {
          return true;
        }
    },
  },

  {
    type: 'input',
    name: 'id',
    message: 'What is the Engineers ID number?',
    validate: function (input) {

      if (!input.match(/^\d+$/) || input.length === 0) {
          return "Provide numbers only. Thanks!";
        }
        return true;
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the Engineers email?',
    validate: function (input) {

      if (!input.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)) {
          return "Provide a proper email address. Thanks!";
        }
        return true;
    },
  },

  {
    type: 'input',
    name: 'github',
    message: 'What is the Engineers github link?',
    validate: function (input) {
        if (input.length === 0) {
          return "Please enter a github user name. Thanks!";
        }
        return true;
    },
  },
]

module.exports = questionsEng


