// Set;
const setNumberOne = new Set([1, 1, 1, 1, 2, 2, 3, 4, 4, 5]);
const emptySet = new Set();
console.log(setNumberOne);

setNumberOne.add(6);
console.log(setNumberOne);

setNumberOne.delete(3);
console.log(setNumberOne);
console.log(setNumberOne.size);
