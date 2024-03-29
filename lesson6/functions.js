import readline from 'readline';

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
// return
function sum2(a, b, c) {
  const summma = a + b + c;
  return summma;
}
const getSum = sum2(7, 42, 543);
console.log(getSum);

console.log('4---------------------------');
// function expression
const sum3 = function sum3f() {
  console.log(3 + 3);
};
sum3();

console.log('5---------------------------');
// arrow expression
const sum4 = () => {
  console.log(4 + 4);
};
sum4();

console.log('6---------------------------');
const sum5 = () => console.log(5 + 5);
sum5();

console.log('7---------------------------');
// default parameter
function sum6(a, b, c = 10) {
  const summma = a + b + c;
  return summma;
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
  let summma = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const num of numbers) {
    summma += num;
  }
  return summma;
}
const resultOfSum7 = sum7(5, 7, 4, 63, 25, 64, 245);
console.log(resultOfSum7);

console.log('10---------------------------');
function sum8(param1, param2, ...restNumbers) {
  let summma = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const num of restNumbers) {
    summma += num;
  }
  console.log(param1, param2);
  return summma;
}
const resultOfSum8 = sum8(5, 7, 4, 6, 6, 4, 6);
console.log(resultOfSum8);

console.log('11---------------------------');

function greetUser() {
  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const name = input.question('What is your name? ', (namenew) => {
    const helloTxt = 'Hello';
    if (namenew) {
      console.log(`${helloTxt} ${namenew}`);
      console.log(`The length of name is: ${namenew.length}`);
      input.close();
    } else {
      console.log('Введіть імʼя юзера');
      input.close();
    }
  });
}
greetUser();
