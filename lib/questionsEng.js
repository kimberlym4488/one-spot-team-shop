const questionsEng = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the Engineers name?',
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
        message: 'What is the Engineers ID number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the Engineers email?',
        validate: function(input) {

          // Declare function as asynchronous, and save the done callback
              var done = this.async();
      
                // Do async stuff
                setTimeout(function() {
                  if (input === ( /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b /i) ) {
                    // Pass the return value in the done callback
                    done("Provide letters only. Thanks!");
                    return;
                  }
                  // Pass the return value in the done callback
                  done(true);
                }, 1000);
            }
      },

      {
        type: 'input',
        name: 'github',
        message: 'What is the Engineers github link?',
      
      },
  ]
  
      module.exports = questionsEng
    

