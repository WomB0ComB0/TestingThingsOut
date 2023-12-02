let array = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];

console.log("[ [ " + array[0]
  + " ] ], [ [ " + array[1]
  + " ] ], [ [ " + array[2]
  + " ] ]");

function transpose(mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = tmp;
    }
  }
}

function gfg_Run() {
  array = array[0].map(
    (col, i) => array.map(row => row[i]));

  console.log("[ [ " + array[0]
    + " ] ], [ [ " + array[1]
    + " ] ], [ [ " + array[2]
    + " ] ]");
}

gfg_Run();
