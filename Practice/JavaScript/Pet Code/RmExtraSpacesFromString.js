let str = ' My     name     is    Mike'
const space = str.replace(/\s+/g,' ').trim(); // using regular expression to replace all spaces with one space and then trim the string to remove the space at the beginning and end of the string.
console.log(space);


// testing git
// let str = ' My     name     is    Mike'
// function spaces() {
//   let arr = str.split(' ')
//   let add = [];
//   arr.forEach((item) => {
//     if (item > 0) {
//       add.push(item)
//     }
//   })
//   return add.join(' ');
// }
// console.log(spaces());