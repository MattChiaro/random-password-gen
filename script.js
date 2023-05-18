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


// prompt length of password
// do they want lowercase?
// do they want uppercase?
// do they want numbers?
// do they want special char?

// ask for length of a password
//prompt
//save it as a variable
//check that input is a number, and inbetween 8 and 128

// confirm

var abcUpper = [  //uppercase alphabet
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]

var abcLower = [ //lowercase alphabet
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]

var specialChar = [ //special characters
  "!",
  "$",
  "%",
  "*",
  "&",
  "'",
  "(",
  ")",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "["
]

var numbers = [ // single digit numbers
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
]

var newPasswordChoices = []; //empty array for each possible string of password

var newPassword = []; //empty array for each string of new password

function getRandomItem(array) {   // generates a random number between zero and the length of the array entered and then prints the value of the array
  var randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex];
}

var passwordLength = prompt("How many characters/numbers would you like in your password?")

if (isNaN(passwordLength)) {
  alert("You must select a valid number!");
}

if (passwordLength > 128 || passwordLength < 8){
  alert("You must select a number between 8 and 128")
}

if (confirm("Would you like uppercase letters in your password?")){ //prompt for uppercase
  newPassword.push(getRandomItem(abcUpper))
  newPasswordChoices.push(...abcUpper)
}


if (confirm("Would you like lowercase letters in your password?")){ //prompt for lowercase
  newPassword.push(getRandomItem(abcLower))
  newPasswordChoices.push(...abcLower)
}

if (confirm("Would you like special characters in your password?")){ //prompt for special characters
  newPassword.push(getRandomItem(specialChar))
  newPasswordChoices.push(...specialChar)
}

if (confirm("Would you numbers in your password?")){
  newPassword.push(getRandomItem(numbers))
  newPasswordChoices.push(...numbers)
}
 
console.log(newPassword);
console.log(newPasswordChoices);
 