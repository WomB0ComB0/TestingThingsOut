// 1: every()
const fruits = ["apple", "banana", "cherry", "durian", "elderberry", "fig", "grape"];
const allStrings = fruits.every((fruit) => typeof fruit === "string");
console.log(allStrings); // true
// 2: filter()
const nums = [1,2,3,4,5,6,7,8,9,10];
const evens = nums.filter((num) => num % 2 === 0);
console.log(evens); // [2,4,6,8,10]
// 3: find()
 
// 4: findIndex()

// 5: forEach()
const fruit = ["apple", "banana", "cherry", "durian", "elderberry", "fig", "grape"];
fruits.forEach((item) => console.log(item)); // logs each fruit
// 6: includes()

// 7: indexOf()

// 8: join()

// 9: lastIndexOf()

// 10: map()
const names = ["Alice", "Bob", "Charlie", "Deborah", "Evan"];
const nameLengths = names.map((name) => name.length);
console.log(nameLengths); // [5,3,7,7,4]
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames); // ["ALICE", "BOB", "CHARLIE", "DEBORAH", "EVAN"]
// 11: pop()

// 12: push()

// 13: reduce()

// 14: reduceRight()

// 15: reverse()

// 16: shift()

// 17: slice()

// 18: some()
const numbers = [1,2,3,4,5,6,7,8,9];
const containsEven = numbers.some((num) => num % 2 === 0);
console.log(containsEven); // true
// 19: sort()

// 20: splice()

// 21: toString()
  
// 22: unshift()

// 23: valueOf()

// 24 flatMap()
const books = [{title: "The Alchemist", author: "Paulo Coelho"}, {title: "The Prophet", author: "Kahlil Gibran"}, {title: "The Little Prince", author: "Antoine de Saint-Exupery"}];
const titles = books.flatMap((book) => book.title);
console.log(titles); // ["The Alchemist", "The Prophet", "The Little Prince"]