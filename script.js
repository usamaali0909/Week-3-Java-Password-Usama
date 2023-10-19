var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+[]{}|;:,.<>?";

  var password = "";
  var selectedChars = "";

  
  var passwordLength = parseInt(prompt("Enter length of the password (8-128 characters):"));

  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Enter password length between 8 and 128 characters.");
    return "";
  }

  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("You must choose one character.");
    return "";
  }

  if (includeLowerCase) {
    selectedChars += lowerCase;
  }
  if (includeUpperCase) {
    selectedChars += upperCase;
  }
  if (includeNumeric) {
    selectedChars += numeric;
  }
  if (includeSpecial) {
    selectedChars += special;
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars.charAt(randomIndex);
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
