console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

console.log('Moving on to question 2:');
// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log('Hello,', name, '!');
}
// Remember to call the function to test
helloName('Dane');
helloName('Ashlyn');
helloName('Spiderman')

console.log('Moving on to question 3:');
// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let solution = firstNumber + secondNumber;
  return solution;
}
console.log(addNumbers(2, 3));
console.log(addNumbers(87, 13));

console.log('Moving on to question 4:');
// 4. Function to multiply three numbers & return the result
function multiplyThree(numberOne, numberTwo, numberThree) {
let solution = numberOne * numberTwo * numberThree;
return solution;
}
console.log(multiplyThree(1, 2, 3));
console.log(multiplyThree(3, 3, 3,));
console.log(multiplyThree(10, 100, 15));

console.log('Moving on to question 5:');
// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ) {
    return true;
  } else if (number <= 0) {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

console.log('Moving on to question 6:')
// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.


/* function getLast(array) {
  let lastItem = array[array.length - 1];
  return lastItem;
}

getLast(array[0, 1, 2, 3]);*/ //says array is not defined


/* let array = []; //gets stuck here as a breakpoint.
function getLast(array) {
  let lastItem = array[array.length - 1];
  return lastItem;
} */

/* let array = new Array []; // says unexpected item ]


function getLast(array) {
  let lastItem = array[array.length - 1];
  return lastItem;
}

getLast(array[0, 1, 2, 3]); */

// figured it out - total syntax problem with the difference between calling
// the function and console logging the function. See below.

function getLast(array) {
  console.log('inside getLast');
  let lastItem = array[array.length - 1];
  return lastItem;
}
console.log(getLast([0, 1, 2, 3])); // returns 3
console.log(getLast(['Andie', 'Nyx', 'Leo'])); // returns Leo
console.log(getLast([])); //returns 'undefined' due to empty array.

console.log('Moving on to question 7:');

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  //console.log('in find function'); testing function with log
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // logs current item in array
    if (value == array[i]) {
      console.log('true'); //using console logs allows it to iterate through the entire array.
    } else {
      console.log('false');// using return stops the loop after the first return.
    }
  }
}

// While testing, I encountered an issue where my loop would stop running when using 'return as below:'
// function find( value, array ){
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]); // logs current item in array
//     if (value == array[i]) {
//       return true;
//     } else {
//       return false; }
// ?? Is there a way to iterate through 'return'? Or will that forever be the end?
// }

console.log(find(3, [2, 3, 4, 5, 6]));
console.log(find('Andie', ['Leo', 'Nyx', 'Andie', 'Adam', 'Ashlyn']));

console.log('Stretch Goals:')
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
