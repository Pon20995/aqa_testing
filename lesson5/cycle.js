// for cycle
console.log('1---------------------------');
for (let index = 0; index <= 5; index++) {
  if (index === 3) {
    // eslint-disable-next-line no-continue
    continue;
  }
  console.log(index);
}
console.log('2---------------------------');

// break
for (let index1 = 0; index1 <= 5; index1++) {
  if (index1 === 3) {
    break;
  }
  console.log(index1);
}
console.log('3---------------------------');

// object
const myCar = {
  type: 'Ford', model: 'Focus', wheels: 4, color: 'white',
};

const myCar2 = {
  type: 'Peugeot',
  model: '206cc',
  wheels: 4,
  color: 'black',
  isGasoline: true,
  engineSound() {
    console.log('brbrbr');
  },
};
console.log(myCar2.type);
console.log(myCar2.color);
myCar2.engineSound();
console.log('4---------------------------');

// for in
// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const value in myCar2) {
  console.log(myCar2[value]);
}
console.log('5---------------------------');
// eslint-disable-next-line no-restricted-syntax
for (const x of myCar2.color) {
  console.log(x);
}
console.log('6---------------------------');

// while
let count = 0;
while (count <= 5) {
  console.log(count);
  count++;
}
console.log('7---------------------------');

// do while
do {
  console.log(`Counter from previous loop ${count}`);
  count++;
} while (count < 10);
console.log('8---------------------------');

// try catch
try {
  // eslint-disable-next-line no-undef
  notExistedFunction();
} catch (error) {
  console.error('Some issues', error.message);
} finally {
  console.log('Static massage after try/catch');
}
