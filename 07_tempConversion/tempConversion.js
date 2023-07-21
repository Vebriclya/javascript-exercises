const convertToCelsius = function (temperature) {
  // Take temperature
  // subtract 32 from tempterature
  // Multiply the result by 5
  // Divide the result by 9

  temperature -= 32;
  temperature *= 5;
  temperature /= 9;

  temperature = Math.round(temperature * 10) / 10;

  return temperature;
};

const convertToFahrenheit = function () {};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
