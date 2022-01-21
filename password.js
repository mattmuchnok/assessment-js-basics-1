//
// Password Validator
//

// Boilerplate
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Global Variables:


// Welcome the user to the password validator tool
console.log(`*** Welcome to the Password Validator Tool! ***`)

// Prompt the user for a password to validate
reader.question(`Please enter the password you want to validate:`, function(input){
    
    // Variables
    const regex = /\d/;
    const doesItHaveNumber = regex.test(input)

    const regex2 = /[a-zA-Z]/
    const doesItHaveLetter = regex2.test(input)

    // Check if the user's password is at least 10 characters long
    // ALSO, check if the user's password is less or equal to 20 characters long
    // ALSO, check if the user's password contains numbers
    // ALSO, check if the user's password contains letters
    if (input.length >= 10 && input.length <= 20 && doesItHaveNumber === true && doesItHaveLetter === true) {
        // If the user's password meets the constraints, show a success message to the user
        console.log(`SUCCESS!`)
    } else {
        // If the user's password fails the constraint, show a failure message to the user
        console.log(`Unable to Validate: Your password does not meet all the necessary requirements.`)
    }

    reader.close()
})