
//	Assignment/Homework-3: Password Generator
//	Author: Taoufik Ammi
//	Date: 06/24/2021 
//	Course: UNC Coding BootCamp
// Javascript File


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate random password based on the user's selection. 
function generatePassword() {
  // The characters that are randomly used in the password
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";

  // The initiated variables based on the user selection. 
  let includeUpperCaseLetters;
  let includeLowerCaseLetters;
  let includeNumbers;
  let includeSymbols;

  // Prompting the user to enter the length of the characters. 
  let length = parseInt(
    prompt(
      "Please enter the number of characters you'd like to have in your password (8 to 128 characters)."
    )
  );

  // Prompt the user to try again if the correct number of characters are not met
  if (!length) {
    alert("Please click ok and try again. Your password must have at least 8 to 128 characters to proceed. ");
  } else if (length < 8 || length > 128) {
    // Verify the user has entered the correct number of characters as outlined. 
    length = parseInt(prompt("You must choose between 8 and 128 characters."));
  } else {
    // Prompt the user to imput the characters as needed. 
    includeUpperCaseLetters = confirm("Please Click ok to include uppercase letters in your password. Otherwise, click cancel. ");
    includeLowerCaseLetters = confirm("Please Click ok to include lowercase letters in your password. Otherwise, click cancel. ");
    includeNumbers = confirm(" Please Click ok to include numbers in your password. Otherwise, click cancel. ");
    includeSymbols = confirm("Please Click ok to include symbols in your password. Otherwise, click cancel. ");
  }

  // Verify the user has entered the requested characters.  
  if (
    !includeUpperCaseLetters &&
    !includeLowerCaseLetters &&
    !includeNumbers &&
    !includeSymbols
  ) {
    // Alert the user to select a character to proceed.
    alert("You have not selected a character for your password. You must select a character to proceed. Please try again.");
  }

  // adding the character stings 
  let characters = "";
  includeUpperCaseLetters ? (characters += upperCaseLetters) : "";
  includeLowerCaseLetters ? (characters += lowerCaseLetters) : "";
  includeNumbers ? (characters += numbers) : "";
  includeSymbols ? (characters += symbols) : "";

  // Generate the password and convert it from an array toa string
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  //Password provided to the user. 
  return password;
}