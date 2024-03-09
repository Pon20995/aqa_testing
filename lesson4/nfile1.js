import chalk from 'chalk';
export const myValue = 'Text text';

let myNumber2 = 2;
export function add(a, b) {
  let myNumber = 10;
  myNumber2 = 20;
  return a + b;
}

let result = add(2, 2);

console.log(result);
console.log(chalk.blue(myNumber2));
console.log(myNumber2);
// console.log(myNumber)
console.log(myValue[0]);
console.log(myValue.length);
console.log(myValue.toUpperCase());
console.log(myValue.toLowerCase());
console.log(myValue.substring(5, 9));

// // commonjs import->export
// const myValu2 = 'Text2'
// module.exports = {myValu2}

let result0fDividing = 5 % 2; // 1

// ++
let counter = 1;

let numberOne = counter++;
console.log(counter);
// numberOne++;
// ++numberOne;
//
console.log(numberOne);

// a > b; a < b; counter == counterText; counter === counterText;
// console. log (counter !== counterText)
// console. log (undefined === null)

let javascriptName = 'Javascript';
let newVariable = javascriptName + ' ' + myValue;
console.log(newVariable);

let newVariableConcat = javascriptName.concat(' ', myValue);
console.log(newVariableConcat);

let javascriptNameSpaced = ' Javascript   '; // trim() => "Javascript"
