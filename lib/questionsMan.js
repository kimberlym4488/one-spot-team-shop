const questionsMan = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the managers name?',
    // Declare function as asynchronous, and save the done callback
    validate: function (input) {

      // Declare function as asynchronous, and save the done callback
      var done = this.async();

      // Do async stuff
      setTimeout(function () {
        if (input.match(/\d/) || input.length === 0) {
          // Pass the return value in the done callback ^\s+|\s+$
          done("Provide a name with letters only. Thanks!");
          return;
        }
        // Pass the return value in the done callback
        done(true);
      });
    }
  },

  {
    type: 'input',
    name: 'id',
    message: 'What is the managers ID number?',
    validate: function (input) {

      var done = this.async();

      setTimeout(function () {
        if (!input.match(/^\d+$/) || input.length === 0) {
          done("Provide numbers only. Thanks!");
          return;
        }
        done(true);
      });
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the managers email?',
    validate: function (input) {

      var done = this.async();

      setTimeout(function () {
        if (!input.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)) {
          done("Provide a proper email address. Thanks!");
          return;
        }
        done(true);
      });
    }
  },
  {
    type: 'input',
    name: 'phoneNumber',
    message: 'What is the managers phone number?',
    validate: function (input) {

      var done = this.async();

      setTimeout(function () {
        if (!input.match(/^[0-9-.]+$/) || input.length === 0) {
          done("Provide a phone number only. Thanks!");
          return;
        }
        done(true);
      });
    }
  },
]


module.exports = questionsMan


