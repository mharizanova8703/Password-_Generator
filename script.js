// Assignment Code
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numbers = '0123456789'
  var specialChar = '!@#$%^&*()_+{}:'
  ;('[]<>?/.,')

  var userChoices = ''

  var passwordLength = parseInt(
    window.prompt(
      'Please choose the amount of characters you would like in your password between 8 and 128',
    ),
  )

  console.log('password length', passwordLength)

  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
