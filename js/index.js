$(document).ready(function() {
  
  // global variable
  var highNumber

  // declare some functions
  function fizzBuzz(number) {
    console.log('Let\'s Buzz all the way to ' + number);

    //start the loop - the real fizzbuzz logic here
    for (var i = 1; i < (number + 1); i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz');
        printTo('.fizzbox ul', 'FizzBuzz');
      }
      else if (i % 5 === 0) {
        console.log('Buzz');
        printTo('.fizzbox ul', 'Buzz');
      }
      else if (i % 3 === 0) {
        console.log('Fizz');
        printTo('.fizzbox ul', 'Fizz');
      }
      else {
        console.log(i);
        printTo('.fizzbox ul', i)
      }
    }
  };

  function getNumber() {
    highNumber = prompt('Choose a high number to use in the FizzBuzz game: ');
    highNumber = parseInt(highNumber + 'a');
    console.log(highNumber);
  };
  
  // append to div
  function printTo(div, value) {
    value = '<li>' + value;
    value += '</li>';
    $(div).append(value);
  }

  // run getNumber function first time
  getNumber();

  // validate highNumber is a number
  // if not, re-prompt
  while (isNaN(highNumber)) {
    alert('You didn\'t enter a number. Please try again.');
    getNumber();  
  }


  fizzBuzz(highNumber);
  
});