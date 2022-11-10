function generatePassword() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstyvwxyz";
  var numbers = "0123456789";
  var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var finalPassword = ""
  var passwordLength = prompt("Specify password length from 8 to 128.")
  console.log(passwordLength)

  if(passwordLength < 8 || passwordLength > 128){
    alert("This password length does not fit, please specify the password length from 8 to 128.")
    return;
  }

  var isUppercase = confirm("Do you want uppercase characters?")
  var isLowercase = confirm("Do you want lowercase characters?")
  var isNumbers = confirm("Do you want numbers?")
  var isSpecial = confirm("Do you want special characters?")

  console.log(isUppercase)
  console.log(isLowercase)
  console.log(isNumbers)
  console.log(isSpecial)

  if(isUppercase){
    finalPassword += uppercase
  }

  if(isLowercase){
    finalPassword += lowercase
  }

  if(isNumbers){
    finalPassword += numbers
  }

  if(isSpecial){
    finalPassword += special
  }

   return finalPassword
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
