let gfg = [];
let row = 3;
let col = 3;
let h = 0

for (let i = 0; i < row; i++) {
  gfg[i] = [];
  for (let j = 0; j < col; j++) {
    gfg[i][j] = h++;
  }
}
console.log(gfg);

let gfg2 = new Array(3);
for (let i = 0; i < gfg2.length; i++) {
  gfg2[i] = [];
}
let h2 = 0;
let s = "CheeseAndBiscuits";

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {

    gfg2[i][j] = s[h2++];
  }
}
console.log(gfg2);

let MathScore = [
  ["Bar", 20, 60, "A"],
  ["Foo", 10, 52, "B"],
  ["Joey", 5, 24, "F"],
  ["John", 28, 43, "A"],
  ["Liza", 16, 51, "B"]
];
console.log(MathScore);

const rows = 3;
const columns = 4;
const matrix = Array.from({ length: rows }, () =>
  new Array(columns).fill(0));
console.log(matrix);

// _________________________________________________________________

const rows2 = 3;
const columns2 = 4;

const matrix2 = Array(rows2).fill().map(() =>
  Array(columns2).fill(0));

console.log(matrix2);
