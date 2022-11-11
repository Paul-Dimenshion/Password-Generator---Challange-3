// Added new function for generation Passwords
function generatePassword() {
  // variables with symbol lists are created
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var lowercase = "abcdefghijklmnopqrstyvwxyz";
  var numbers = "0123456789";
  var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var finalPassword = ""
  var passwordLength = prompt("Specify password length from 8 to 128.") // notification about the borders of the length of the generated password
  console.log(passwordLength)

  if(passwordLength < 8 || passwordLength > 128){
    alert("This password length does not fit, please specify the password length from 8 to 128.")
    return;
  }
  // Added variables with query function on user’s wish manifestation
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

  // Lists transferred to array
  var consolidatedFP = Array.from(finalPassword)
    console.log(consolidatedFP)
    console.log(typeof consolidatedFP[0])

    let randomPassword = "";

    // for loop grabs passwordLength to use
    for (let i = 0; i < passwordLength; i++) {
      //finalPassword connects to passwordLength that uses both Math.floor and random to take the length of finalPassword and randomize the results
      randomPassword += finalPassword[Math.floor(Math.random() * finalPassword.length)];
    };

    // return password results
    return randomPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Added function of copying password by click to output area
function copyPassword() {
  //Get the text field
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

