function celsiusToFahrenheit(temp) {
  let fahrenheit = (temp * 9 / 5) + 32;
  return fahrenheit + 'ºF';
}
function fahrenheitToCelsius(temp) {
  let celsius = (temp - 32) / (9 / 5);
  return celsius + 'ºC';
}
console.log(celsiusToFahrenheit(60));
console.log(fahrenheitToCelsius(120));