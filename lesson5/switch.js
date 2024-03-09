//switch statement
let ageCustomer = 16;
let isAdult = 18;

switch (true) {
  case ageCustomer > isAdult:
    // The code to be executed if the expression is equal to value1
    console.log('1. customer age over 18');
    break;
  case ageCustomer > isAdult:
    // The code to be executed if the expression is equal to value2
    console.log('1. customer age over 50');
    break;
  default:
    // Code that will be executed if none of the values match
    console.log('1. under age');
}
