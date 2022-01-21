const questionsMan = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the managers name?',
  //validation function, modified from inquirer docs to fit this usage.
    validate: function (input) {

        if (input.match(/\d/) || input.length === 0) {
            // Pass a user message value in the false callback 
          return "Provide a name with letters only. Thanks!";
        }
        else {
                // Pass the return value in the done callback ^\s+|\s+$
          return true;
        }
    },
  },

  {
    type: 'input',
    name: 'id',
    message: 'What is the managers ID number?',
    validate: function(input){
        if (!input.match(/^\d+$/) || input.length === 0) {
          return "Provide numbers only. Thanks!";
        }
        return true;
      },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the managers email?',
    validate: function (input) {

        if (!input.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)) {
          return "Provide a proper email address. Thanks!";
        }
        return true;
    },
  },
  
  {
    type: 'input',
    name: 'phoneNumber',
    message: 'What is the managers phone number?',
    validate: function (input) {

        if (!input.match(/^[0-9-.]+$/) || input.length === 0) {
          return "Provide a phone number only. Thanks!";
          
        }
        return true;
    },
  },
]


module.exports = questionsMan


