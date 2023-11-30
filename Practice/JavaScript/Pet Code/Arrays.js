// 1: every()
const fruits = ["apple", "banana", "cherry", "durian", "elderberry", "fig", "grape"];
const allStrings = fruits.every((fruit) => typeof fruit === "string");
console.log(allStrings); // true

// 2: filter()
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = nums.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// 3: find()
const cherry = fruits.find((fruit) => fruit === "cherry");
console.log(cherry); // "cherry"

// 4: findIndex()
const elderberryIndex = fruits.findIndex((fruit) => fruit === "elderberry");
console.log(elderberryIndex); // 4

// 5: forEach()
const fruit = ["apple", "banana", "cherry", "durian", "elderberry", "fig", "grape"];
fruits.forEach((item) => console.log(item)); // logs each fruit

// 6: includes()
const hasDurian = fruits.includes("durian");
console.log(hasDurian); // true

// 7: indexOf()
const cherryIndex = fruits.indexOf("cherry");
console.log(cherryIndex); // 2

// 8: join()
const fruitsString = fruits.join(", ");
console.log(fruitsString); // "apple, banana, cherry, durian, elderberry, fig, grape"

// 9: lastIndexOf()
const lastCherryIndex = fruits.lastIndexOf("cherry");
console.log(lastCherryIndex); // 2

// 10: map()
const names = ["Alice", "Bob", "Charlie", "Deborah", "Evan"];
const nameLengths = names.map((name) => name.length);
console.log(nameLengths); // [5, 3, 7, 7, 4]
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames); // ["ALICE", "BOB", "CHARLIE", "DEBORAH", "EVAN"]

// 11: pop()
const lastFruit = fruits.pop();
console.log(lastFruit); // "grape"

// 12: push()
fruits.push("kiwi");
console.log(fruits); // ["apple", "banana", "cherry", "durian", "elderberry", "fig", "kiwi"]

// 13: reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 45

// 14: reduceRight()
const rightSum = numbers.reduceRight((acc, num) => acc + num, 0);
console.log(rightSum); // 45

// 15: reverse()
const reversedFruits = fruits.reverse();
console.log(reversedFruits); // ["kiwi", "fig", "elderberry", "durian", "cherry", "banana", "apple"]

// 16: shift()
const firstFruit = fruits.shift();
console.log(firstFruit); // "kiwi"

// 17: slice()
const selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits); // ["fig", "elderberry", "durian"]

// 18: some()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const containsEven = numbers.some((num) => num % 2 === 0);
console.log(containsEven); // true

// 19: sort()
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 20: splice()
const removedItems = fruits.splice(2, 3);
console.log(fruits); // ["apple", "banana", "fig", "kiwi"]
console.log(removedItems); // ["cherry", "durian", "elderberry"]

// 21: toString()
const fruitsStringAgain = fruits.toString();
console.log(fruitsStringAgain); // "apple,banana,fig,kiwi"

// 22: unshift()
fruits.unshift("orange");
console.log(fruits); // ["orange", "apple", "banana", "fig", "kiwi"]

// 23: valueOf()
const fruitsValue = fruits.valueOf();
console.log(fruitsValue); // ["orange", "apple", "banana", "fig", "kiwi"]

// 24: flatMap()
const books = [
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "The Prophet", author: "Kahlil Gibran" },
  { title: "The Little Prince", author: "Antoine de Saint-Exupery" }
];
const titles = books.flatMap((book) => book.title);
console.log(titles); // ["The Alchemist", "The Prophet", "The Little Prince"]
