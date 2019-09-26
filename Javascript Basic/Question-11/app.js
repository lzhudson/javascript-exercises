function celsiusToFahrenheit(temp) {
  let celsius = temp;
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit + 'ºF';
}
function fahrenheitToCelsius(temp) {
  let fahrenheit = temp; 
  let celsius = (fahrenheit - 32) / (9 / 5);
  return celsius + 'ºC';
}
console.log(celsiusToFahrenheit(60));
console.log(fahrenheitToCelsius(120));