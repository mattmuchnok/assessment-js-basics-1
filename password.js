//
// Password Validator
//

// Boilerplate
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Welcome the user to the password validator tool
console.log(`*** Welcome to the Password Validator Tool! ***`)

// Prompt the user for a password to validate
reader.question(`Please enter the password you want to validate:`, function(input){
    
    // Check if the user's password is at least 10 characters long
    if (input.length >= 10) {
        // If the user's password meets the constraint, show a success message to the user
        console.log(`SUCCESS!`)
    } else {
        // If the user's password fails the constraint, show a failure message to the user
        console.log(`Unable to Validate: Your password does not meet all the necessary requirements.`)
    }

    reader.close()
})
