let randomNumber = Math.ceil(Math.random() * 10) + 1; 
let number = window.prompt('Digite um numero');
if(Number(number) === randomNumber) {
  alert('Good Work');
} else {
  alert('Not Matched');
}