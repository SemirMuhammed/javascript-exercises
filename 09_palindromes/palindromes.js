const palindromes = function(str) {
  const allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
  const adjustedStr = str
    .toLowerCase()
    .split("")
    .filter((letter) => allowedChars.includes(letter))
    .join("");

  const reversedStr = adjustedStr.split("").reverse().join("");

  return adjustedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
