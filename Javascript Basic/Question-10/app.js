let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let result = document.querySelector('.result');
function multiply() {
  result.innerHTML = `<p>The Result is:</p>
  ${Number(number1.value) * Number(number2.value)}`
  
}
function divide() {
  result.innerHTML = `<p>The Result is:</p>
  ${Number(number1.value) / Number(number2.value)}`
  
}