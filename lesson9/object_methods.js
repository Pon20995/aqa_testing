console.log('1---------------------------');
const object1 = {
  name: 'John',
  lastName: 'Dow',
  age: 1000,
  address: 'R. Francisco sa Carneiro 18',
};
console.log(object1);

console.log('2---------------------------');
const anotherObject1 = object1;
console.log(anotherObject1.age);

anotherObject1.age = 10;
console.log(anotherObject1.age);

console.log('3---------------------------');
const object2 = {};
object2.name = 'Hugh';
console.log(object2);

console.log('4---------------------------');
const object3 = {
  name: 'Till',
  phone: {
    mobile: 12345,
    home: 34567,
    'cord phone': 56789,
  },
};
console.log(object3);
console.log(object3.phone.home);
console.log(object3.phone['cord phone']);
console.log(object3.phone.mobile);

console.log('5---------------------------');
const nameKolo = 'Kolo';
const age20 = 20;

const object4 = {
  name: nameKolo,
  age: age20,
};
console.log(object4);

console.log('6---------------------------');
// деструктуризація
const selectorHeader = 'h1.main.pointer';
const textInHeader = 'Hello user';

const combinedSelectors = { selectorHeader, textInHeader };
console.log(combinedSelectors.selectorHeader);

combinedSelectors.footerElement = 'link';
combinedSelectors.linkToHomePage = 'link to home page';
console.log(combinedSelectors);

const {
  selectorHeader: newSelHeader,
  footerElement: newfooter,
  linkToHomePage: newLinkH,
} = combinedSelectors;
console.log(newSelHeader);

console.log('7---------------------------');
const prop = 'age';
const selectorForFooter = {
  [prop]: 3000,
};
const ageFromObject = selectorForFooter.age;
console.log(ageFromObject);

console.log('8---------------------------');
// this
const objectValuesPointPlus = {
  name: nameKolo,
  age: age20,
  sayHi() {
    console.log('Hello from method, not function');
  },
  showName() {
    console.log(`My name is ${this.name}`);
  },
  gender: null,
};
objectValuesPointPlus.sayHi();
objectValuesPointPlus.showName();

console.log('9---------------------------');
// ? optional operator for unexisting data from objects
const resultOfFunction = objectValuesPointPlus.showAge?.();
console.log(resultOfFunction);

console.log('10---------------------------');
// if no value ?? set default value
const genderFromObj1 = object1.gender;
const genderFromObj2 = object1.gender ?? 'default value';
console.log(genderFromObj1);
console.log(genderFromObj2);

console.log('11---------------------------');
for (const valueKey in objectValuesPointPlus) {
  //   console.log(valueKey);
  console.log(`${valueKey}: ${objectValuesPointPlus[valueKey]}`);
}

console.log('12---------------------------');
const newObjPlus = Object.create(objectValuesPointPlus);
newObjPlus.legs = 2;

console.log(objectValuesPointPlus.hasOwnProperty('legs'));
console.log(newObjPlus.hasOwnProperty('legs'));

const objBasedArrays = [
  { name: 'John', lastName: 'Dow' },
  { name: 'John', lastName: 'Dow' },
  { name: 'John', lastName: 'Dow' },
];

objBasedArrays.forEach((objBasedArrays1) => {
  if (!objBasedArrays1.legs) {
    console.log('no property');
  }
});

console.log('13---------------------------');
const keys = Object.keys(objectValuesPointPlus);
const valuesO = Object.values(objectValuesPointPlus);
console.log(`${keys}:\n${valuesO}`);

console.log('14---------------------------');
// деструктуризація масивів
const elementsArray = ['input', 'button', 'button.send'];
const [firstELement, secondElement, ThirdELement] = elementsArray;
console.log(firstELement);

console.log('15---------------------------');
// ...  copy of object
const copiedSelectors = { ...combinedSelectors };
copiedSelectors.selectorHeader = 'NNN';
console.log(copiedSelectors.selectorHeader);
console.log(combinedSelectors.selectorHeader);

console.log('16---------------------------');
// assign method
const copiedSelectors2 = { ...combinedSelectors };
copiedSelectors2.selectorHeader = 'AAA';
console.log(copiedSelectors2.selectorHeader);
console.log(combinedSelectors.selectorHeader);

console.log('17---------------------------');
function clickAndVerifyDataInFooter(copiedSelectorsnew) {
  console.log(`Click on the element ${copiedSelectorsnew.footerElement}`);
}

clickAndVerifyDataInFooter(copiedSelectors);

console.log('18---------------------------');
// map

const simpleMap = new Map();
simpleMap.set('keyNumber1', 'valueNumber1');
console.log(simpleMap.get('keyNumber1'));
console.log(simpleMap.has('keyNumber1'));
simpleMap.delete('keyNotExisted');
simpleMap.clear();
console.log(simpleMap.get('keyNumber1'));
