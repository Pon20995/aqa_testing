console.log('1---------------------------');
const fruits = ['Apple', 'Banana', 'Orange', 'Kiwi'];

console.log(fruits[2]);
const elementNumber2 = fruits[2];
console.log(`I like ${elementNumber2}`);
console.log(fruits);

fruits[3] = 'Peach';
fruits[10] = 'Lemon';
console.log(fruits);

console.log('2---------------------------');
// eslint-disable-next-line no-array-constructor
const anotherFruits = new Array('red', 'blue', 'yellow');
console.log(anotherFruits.length);
console.log(anotherFruits[anotherFruits.length - 1]); // вивід останнього елемента

console.log('3---------------------------');
fruits[6] = function fruitsFunc() {
  console.log('Hello array');
};
console.log(fruits);

console.log('4---------------------------');
function iterator(arr) {
  let startIndex = 0;
  return {
    next() {
      if (startIndex < arr.length) {
        return {
          value: arr[startIndex++],
          done: false,
        };
      }
      return {
        value: undefined,
        done: true,
      };
    },
  };
}

const arrayIterator = iterator(fruits);
console.log(arrayIterator.next(), arrayIterator.next());

console.log('5---------------------------');
for (let i = 0; i < fruits.length; i++) {
  console.log(`index ${i} value of index: ${fruits[i]}`);
}

console.log('6---------------------------');
// eslint-disable-next-line no-restricted-syntax
for (const fruit of fruits) {
  console.log(fruit);
}
console.log('7---------------------------');
const passwords = ['wsef', 'esddas', 'afasf', 1111, 44, 66];

console.log('8---------------------------');
let a = 10;
const b = a;

a = 20;
console.log(a);
console.log(b);

const fruitsUpdated = fruits;
fruits.push('Grapefruit');

console.log(fruits);
console.log(fruitsUpdated);

console.log('9---------------------------');
fruitsUpdated.push('Coconut');
console.log(fruits);
console.log(fruitsUpdated);

console.log('10---------------------------');

fruits.pop(); // remove the last element
fruits.unshift('Strawberry'); // add the element at the start
fruits.shift(); // remove the element at start
console.log(fruits);

const slicedFruits = fruits.slice(2, 4);
console.log(slicedFruits);

console.log('11---------------------------');

fruits.splice(2, 0, 'Pineapple'); // 2- after element, 0- elements to delete, add element
console.log(fruits);

console.log('12---------------------------');
const fuitsAndPasswords = fruits.concat(passwords); // join arrays
console.log(fuitsAndPasswords);

fuitsAndPasswords.forEach((element) => {
  console.log(element);
});

console.log('13---------------------------');
const evenPassForTest = fuitsAndPasswords.find((element) => element % 2 === 0);
console.log(evenPassForTest);

console.log('14---------------------------');
fuitsAndPasswords.sort();
console.log(fuitsAndPasswords);

console.log(fruits.includes('Lemon'));
