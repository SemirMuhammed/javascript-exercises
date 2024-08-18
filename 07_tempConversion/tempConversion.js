const convertToCelsius = function(temp) {
  return +((+temp.toFixed(1) - 32) * 5 / 9).toFixed(1);
};

const convertToFahrenheit = function(temp) {
  return +(9 * +temp.toFixed(1) / 5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
