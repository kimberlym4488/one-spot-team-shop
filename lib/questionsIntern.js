const questionsIntern = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the Interns name?',
        validate: function(input) {

          // Declare function as asynchronous, and save the done callback
              var done = this.async();
      
                // Do async stuff
                setTimeout(function() {
                  if (input.match( /\d+/ )) {
                    // Pass the return value in the done callback
                    done("Provide letters only. Thanks!");
                    return;
                  }
                  // Pass the return value in the done callback
                  done(true);
                }, 3000);
            }
        },
      
      {
        type: 'input',
        name: 'id',
        message: 'What is the Interns ID number?',
        validate: function(input) {

          // Declare function as asynchronous, and save the done callback
              var done = this.async();
      
                // Do async stuff
                setTimeout(function() {
                  if (!input.match( /^\d+$/ )) {
                    // Pass the return value in the done callback
                    done("Provide numbers only. Thanks!");
                    return;
                  }
                  // Pass the return value in the done callback
                  done(true);
                }, 3000);
            }
        
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the Interns email?',
        default: 'internbo',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Which school does the intern attend?',
        default: 'internbo',
      },
  ]
  
      module.exports = questionsIntern
    

