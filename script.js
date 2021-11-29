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

// Returning values from an argument
// In your program you can assign the return value of the function to a variable, when you invoke the function.

function returnValue(test) {
  return 'hi';
}
// I will declare a new variable to return the value from my function
// Result variable now holds a string with the hi! value.
const result = returnValue();
console.log(result);

// You can "return early" from a function, and this is very useful for example when you need to meet a condition before going on with your program:

function earlyReturn(tester) {
  if (tester === false) return console.log('I am false');
  // do something

  return console.log('I am the truest');
}

console.log(earlyReturn(false));

// You can only return one value from a function.
// A "trick" to return multiple values from a function is to return an object, or an array, like this:

function returnManyValues() {
  return ['Joker', 78];
}

const [name, age] = returnManyValues();
console.log(returnManyValues());
