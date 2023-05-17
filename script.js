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

var passwordLength = prompt("How many characters/numbers would you like in your password?")
