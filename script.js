var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  var password = "";
  var selectedChars = "";

  
  var passwordLength = parseInt(prompt("Enter the length of the password (8-128 characters):"));

  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return "";
  }

  if (includeLowerCase) {
    selectedChars += lowerCaseChars;
  }
  if (includeUpperCase) {
    selectedChars += upperCaseChars;
  }
  if (includeNumeric) {
    selectedChars += numericChars;
  }
  if (includeSpecial) {
    selectedChars += specialChars;
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
