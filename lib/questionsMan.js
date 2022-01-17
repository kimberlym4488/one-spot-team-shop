const questionsMan = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the managers name?',
       // Declare function as asynchronous, and save the done callback
       validate: function(input) {

        // Declare function as asynchronous, and save the done callback
            var done = this.async();
    
              // Do async stuff
              setTimeout(function() {
                if (input.match( /\d/ ) || input.length === 0) {
                  // Pass the return value in the done callback ^\s+|\s+$
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
      name: 'id',
      message: 'What is the managers ID number?',
      validate: function(input) {

        // Declare function as asynchronous, and save the done callback
            var done = this.async();
    
              // Do async stuff. ONLY numbers should be returned with this one. 
              setTimeout(function() {
                if (!input.match( /^\d+$/ )) {
                  // Pass the return value in the done callback
                  done("Provide numbers only. Thanks!");
                  return;
                }
                // Pass the return value in the done callback
                done(true);
              }, 1000);
          }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers email?',
      validate: function(input) {

        // Declare function as asynchronous, and save the done callback
            var done = this.async();
    
              // Do async stuff
              setTimeout(function() {
                if (!input.match( /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i) ) {
                  // Pass the return value in the done callback
                  done("Provide a proper email address. Thanks!");
                  return;
                }
                // Pass the return value in the done callback
                done(true);
              }, 1000);
          }
    },
    {
      type: 'input',
      name: 'phoneNumber',
      message: 'What is the managers phone number?',
      validate: function(input) {

        // Declare function as asynchronous, and save the done callback
            var done = this.async();
    
              // Do async stuff
              setTimeout(function() {
                if (!input.match( /^\[0-9-()]+$/) ) {
                  // Pass the return value in the done callback
                  done("Provide a proper email address. Thanks!");
                  return;
                }
                // Pass the return value in the done callback
                done(true);
              }, 1000);
          }
    },
    },
  }

  
      module.exports = questionsMan
    

