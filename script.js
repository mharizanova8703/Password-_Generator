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
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Please choose a number between 8 and 128')
    return
  } else {
    var littleLetter = window.confirm(
      'Would you like lowercase letters in your password?',
    )
console.log('little numbers confirm', littleLetter)

    var bigLetter = window.confirm(
      'Would you like uppercase letters in your password?',
    )
     var num = window.confirm('Would you like numbers in your password?')

    var specialCharacterConfirm = window.confirm(
      'Would you like special characters in your password?',
    )
if (littleLetter === true) {
      userChoices += lowerCase
    }

    if (bigLetter === true) {
      userChoices += upperCase
    }

    if (num === true) {
      userChoices += numbers
    }

    if (specialCharacterConfirm === true) {
      userChoices += specialChar
    }

    console.log('user choices', userChoices)


  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
