console.log('1---------------------------');
function sum() {
  console.log(2 + 2);
}
sum();

console.log('2---------------------------');
function sum1(a, b) {
  console.log(a + b);
}
sum1(7, 238);

console.log('3---------------------------');
//return
function sum2(a, b, c) {
  const sum = a + b + c;
  return sum;
}
const getSum = sum2(7, 42, 543);
console.log(getSum);

console.log('4---------------------------');
//function expression
const sum3 = function () {
  console.log(3 + 3);
};
sum3();

console.log('5---------------------------');
//arrow expression
const sum4 = () => {
  console.log(4 + 4);
};
sum4();

console.log('6---------------------------');
const sum5 = () => console.log(5 + 5);
sum5();

console.log('7---------------------------');
//default parameter
function sum6(a, b, c = 10) {
  const sum = a + b + c;
  return sum;
}
const getSum1 = sum6(7, 42);
console.log(getSum1);

console.log('8---------------------------');
function greeting(name, hello = 'Hello') {
  console.log(`${hello} ${name}`);
  console.log(hello.concat(' ', name));
}
greeting('Koala');
greeting('Monkey', 'Privit');

console.log('9---------------------------');
function sum7(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
const resultOfSum7 = sum7(5, 7, 4, 63, 25, 64, 245);
console.log(resultOfSum7);

console.log('10---------------------------');
function sum8(param1, param2, ...restNumbers) {
  let sum = 0;
  for (let num of restNumbers) {
    sum += num;
  }
  console.log(param1, param2);
  return sum;
}
const resultOfSum8 = sum8(5, 7, 4, 6, 6, 4, 6);
console.log(resultOfSum8);

console.log('11---------------------------');
import readline from 'readline';

function greetUser() {
  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let name = input.question('What is your name? ', function (name) {
    let helloTxt = 'Hello';
    if (name) {
      console.log(`${helloTxt} ${name}`);
      console.log(`The length of name is: ${name.length}`);
      input.close();
    } else {
      console.log('Введіть імʼя юзера');
      input.close();
    }
  });
}
greetUser();
