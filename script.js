/*
// Regular function with no parameters - so nothing inside the parenthesis

function funcName() {
  console.log('hello computuer');
}

funcName();
*/

/*
// Adding parameters to a function - adding it inside the parenthesis
// I can add more than one parameter to my function

function addedParameters(test, test2) {
  return test + ' ' + test2;
}

console.log(addedParameters('hello', 'buddy'));

// Another example as to why you might get undefined for your parameter when yoy call/invoke a function with no argument

function misc(color) {
  console.log(color);
}

misc();

// Setting a default value to the parameter

function someAges(age1, age2 = 89) {
  console.log(age1, age2);
}

someAges(10, 5000);
*/

/*
// Returning values from an argument
// In your program you can assign the return value of the function to a variable, when you invoke the function.

function returnValue(test) {
  return 'hi';
}
// I will declare a new variable to return the value from my function
// Result variable now holds a string with the hi! value.
const result = returnValue();
console.log(result);

// Here is another example
// This time I can declare a new variable and return it

function increment(num) {
  const newVariable = num + 1;
  return newVariable;
}

console.log(increment(2));

// You can "return early" from a function, and this is very useful for example when you need to meet a condition before going on with your program:

function earlyReturn(tester) {
  if (tester === false) return console.log('I am false');
  // do something

  return console.log('I am the truest');
}

console.log(earlyReturn(false));

// Another early return function example

function passThis(something) {
  if (something === undefined) {
    return 'Pleeeeease add a value/argument';
  }

  return 'Hey, something was passed';
}

console.log(passThis());



// You can only return one value from a function.
// A "trick" to return multiple values from a function is to return an object, or an array.
// I will declare an array with parameters in them and assign it to call/invoke function.

function returnManyValues() {
  return ['Joker', 78];
}

const [name, age] = returnManyValues();
console.log(returnManyValues());
*/

/*
// Arrow function
// Arrow functions are anonymous. We must assign them to a variable.

const arrowFunc = () => {
  //do something
};

// to call/invoke an arrow function
arrowFunc();

// If the function body contains just a single statement, you can omit the parentheses and write all on a single line.

const singLineArrowFunc = () => 'Hiya';
console.log(singLineArrowFunc());

// Parameters are passed in the parentheses.

const paramArrowFunc = (test, test2) => console.log(test, test2);

console.log(paramArrowFunc(2, 4));

// Arrow function does not need to have the RETURN keyword

const noNeedToReturn = () => 'test';
console.log(noNeedToReturn());

// Like with regular functions, we can have default parameters, in case they are not passed.

const defaultParams = (param1 = 'blue', param2 = 100) => {
  return param1 + ' ' + param2;
};

console.log(defaultParams());
*/

/*
// Nesting functions
// A function inside a function

// Arrow function can also have another arrow function or regular function inside of it.

// First arrow function
const increment = (num) => {
  return num + 1;
};

console.log(increment(5));

// Second arrow function
const test = () => {
  const num = 1;

  console.log(increment(num));
};

test();
*/

/*
// IIFE - Immediately Invoked Function Expression

(()=>{

})
*/

// Recursion
/*
function greet() {
  // console.log('Hello');
  greet();
}

greet();
*/
// Another example of Recursion looping, which is what recursion is with functions
// I can just put return to stop it there once it is greater than 10 to stop the loop

/*
function printNumber(num) {
  if (num > 10) return;
  console.log(num);
  printNumber(num + 1);
}

printNumber(1);
*/
// Keep in mind I can do this with a FOR loop, in fact I can have it add all my numbers in a loop

// let sum = 0;

// for (let i = 0; i <= 10; i++) {
//   sum = sum + i;
// }

// console.log(sum);

/*
// A recursion example that loops through numbers
// function sumNumbersBelow(number) {
//   if (number <= 0) return 0;
//   return number + sumNumbersBelow(number - 1);
// }

// console.log(sumNumbersBelow(2));

// Convert this while loop into a recursion function
const person = {
  name: 'Kyle',
  friend: {
    name: 'Joe',
    friend: {
      name: 'Sally',
    },
  },
};

// Here is a typical WHILE loop for the object above
// let currentPerson = person;

// while (currentPerson != null) {
//   console.log(currentPerson.name);
//   currentPerson = currentPerson.friend;
// }

// printNames(person)

function printNames(person) {
  // this return is to escape out of this function
  if (person == null) return;
  console.log(person.name);
  printNames(person.friend);
}

printNames(person);

// Flavio Recursion example with numbers

function test(num) {
  num = num - 1;
  console.log(num);

  if (num == 0) return 0;

  test(num);
}

// Call my function
test(2);



// Flavio Recursion example with strings

function test2(string) {
  console.log(string);
  string = string.substring(0, string.length - 1);
  if (string.length === 0) return '';
  test2(string);
}

// call it
test2('hello');


function test2(string) {
  console.log(string);

  if (string.length === 1) return '';

  test2(string.substring(0, string.length - 1));
}

// call it
test2('funky');
*/

// Array Manipulation/method
// Let's start with .map() method which is surveying this whole array

// const a = [1, 2, 3];

// a.map((item) => {
//   console.log(item);
// });

// console.log(a);

// Next is the .filter() method
// Here I can choose which item I want filtered.
// Lets see if I can even numbers in the array

// const b = [1, 2, 3, 4, 5, 6];

// const c = b.filter((item) => {
//   if (item % 2 === 0) return true;
//   return false;
// });

// console.log(c);

const lastArray = [10, 20, 30, 40];

const only = lastArray
  .filter((item) => {
    return item === 30;
  })
  .map((item) => item * 2);

console.log(only);

// const filterLastOut = lastArray.filter((item) => item === 40).shift();

// console.log(filterLastOut);
