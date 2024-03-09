let ageCustomer = 20;
let isAdult = 18;

//if statement
if (!ageCustomer) {
  console.log('1. please fill your age');
}
if (ageCustomer < 18) {
  console.log('1. customer age under 18');
  if (ageCustomer < 10) {
    console.log('1. customer age under 10');
  }
} else if (ageCustomer <= 50) {
  console.log('1. customer age less than 50');
} else if (ageCustomer <= 100) {
  console.log('1. customer age less than 100');
} else {
  console.log('1. Parameter not allign to 1 or more', +ageCustomer);
}

//&& - combine few conditions
let ageSantaClaus = 56;

if (ageSantaClaus >= 1 && ageSantaClaus <= 50) {
  console.log('2. hahaha');
} else if (ageSantaClaus > 50 && ageSantaClaus < 100) {
  console.log('2. hohoho');
}

//ternary operator
let ageCustomer2 = 18;

if (ageCustomer2 >= isAdult) {
  console.log('3. good simple');
} else {
  console.log('3. bad simple');
}

const accessByAge =
  ageCustomer2 >= isAdult
    ? console.log('4. good ternary')
    : console.log('4. bad ternary');

const accessByAge1 =
  ageCustomer <= isAdult
    ? console.log('5. Not in age')
    : ageCustomer <= 50
      ? console.log('5. in age up to 50')
      : console.log('5. over age');
