const palindromes = function (stringToCheck) {
  stringToCheck = stringToCheck.toLowerCase();
  stringToCheck = stringToCheck.replace(/[^a-z0-9]/gi, "");
  let reveredString = stringToCheck.split("").reverse().join("");

  let isAPalindrome = false;

  if (reveredString === stringToCheck) {
    isAPalindrome = true;
  }

  return isAPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
