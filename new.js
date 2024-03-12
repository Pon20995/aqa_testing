const valueMyNumber = 30;
const valueMyNumber2 = 3.1414;
const valueTxt = 'abc';

console.log(Infinity);
console.log(valueMyNumber);
console.log(valueMyNumber2);
console.log(valueMyNumber / valueTxt);
// eslint-disable-next-line no-restricted-globals
console.log(isNaN(valueMyNumber));

const str1 = 'abc';
const str2 = 'abc';
const str3 = `abc ${valueMyNumber} result of ${3 + 1}`;
console.log(str3);

const isTrue = true;
const isFalse = false;
console.log(isFalse);

let myNumber343;
// console.log(myNumber343);

let blabla;
let isEmpty = null;
isEmpty = 'element';

// eslint-disable-next-line symbol-description
const mySymbol = Symbol();
const identificator1 = Symbol('idMy');
console.log(identificator1.toString());

const bigInt = 29292929292929n;
const bigInt2 = BigInt(203049492);

console.log(typeof isEmpty);

// eslint-disable-next-line no-new-wrappers
const str111 = new String('New');
// eslint-disable-next-line no-new-wrappers
const str222 = new Number(222);
// eslint-disable-next-line no-new-wrappers
const str333 = new Boolean(true);
