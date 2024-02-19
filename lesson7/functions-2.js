console.log("1---------------------------");
function sayHi() {
  console.log("Hi");
}

sayHi();

const sayHi2 = function () {
  console.log("Hi");
};
sayHi2();

const sayHi3 = () => {
  console.log("Hi");
};
sayHi3();

console.log("2---------------------------");
const sayHinew = sayHi;
sayHinew();

console.log("3---------------------------");
console.log(sayHinew.name);
console.log(sayHinew.toString());

console.log("4---------------------------");
const say = (funcParam) => {
  console.log(funcParam.name.length);
};
say(sayHi);

console.log("5---------------------------");
//callback
const isOdd = (n) => {
  return n % 2 !== 0;
};
let useAnotherFunction = (callback, num) => {
  const isNumOdd = callback(num);
  console.log(`The number ${num} is an odd number: ${isNumOdd}`);
};
useAnotherFunction(isOdd, 4);

console.log("6---------------------------");
function fetchData(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}

fetchData("https://jsonplaceholder.typicode.com/todos/1", function (data) {
  console.log(data);
});

console.log("7---------------------------");
const myCar = {
  type: "Ford",
  model: "Focus",
  wheels: 4,
  color: "white",
  sound: "beep",
  makeSignal: function () {
    console.log(`Car make signal ${this.sound}`);
  },
};
myCar.makeSignal();

const myCar2 = {
  type: "Nissan",
};

function showType() {
  console.log(this.type);
}
myCar2.fff = showType;
myCar.func = showType;
myCar.func();
myCar2.fff();

console.log("8---------------------------");
function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hello ${this.name}`);
  };
}
const koala = new Person("Koala");
koala.greet();

console.log("9---------------------------");
// With call(), an object can use a method belonging to another object.
const greet3 = function () {
  console.log(`Hello, ${this.name}!`);
};
const person22 = { name: "Koala" };
greet3.call(person22);

console.log("10---------------------------");
//With the apply() method, you can write a method that can be used on different objects. The apply() method takes arguments as an array.
function greet2(timesOfDay, weather) {
  console.log(`Good ${timesOfDay}, ${this.name}! It's ${weather} today.`);
}

const person = { name: "Bob" };
greet2.apply(person, ["morning", "sunny"]); // Виведе: Good morning, Bob! It's sunny today.

console.log("11---------------------------");
// With the bind() method, an object can borrow a method from another object.
function greet1() {
  console.log(`Hi, I'm ${this.name}`);
}

const person33 = { name: "Charlie" };
const greetPerson = greet1.bind(person33);
greetPerson(); // Виведе: Hi, I'm Charlie

console.log("12---------------------------");
//анонімна функція викликається один раз
(function () {
  // function body
  //open;
  //login name & pass
})();

console.log("13---------------------------");
function master() {
  let masterValue = 10;

  function slave() {
    console.log(masterValue);
  }
  return slave;
}

let closureFunc = master();
closureFunc();

console.log("14---------------------------");
//recurssion
function factorial(n) {
  // Базовий випадок: факторіал 0 або 1 = 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Рекурсивний випадок: факторіал числа n = п * факторіал (n - 1)
    return n * factorial(n - 1); //5*4*3*2*1=120
  }
}
const factorialRes = factorial(5);
console.log(factorialRes);

console.log("15---------------------------");
function* GenerateData() {
  yield 1;
  yield 2;
  yield 3;
}

const generatorUsage = GenerateData();
console.log(generatorUsage.next());
console.log(generatorUsage.next());
console.log(generatorUsage.next());
console.log(generatorUsage.next());
