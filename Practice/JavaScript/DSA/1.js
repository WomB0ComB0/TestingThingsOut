function solution(a) {
  const res = []
  const trees = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      trees.push(i)
    }
  }

  for (let i = trees.length - 1; i >= 0; i--) {
    a.splice(trees[i], 1);
  }

  a.sort((a, b) => a - b)

  let j = 0;
  for (let i = 0; i < a.length + trees.length; i++) {
    if (trees.includes(i)) {
      res.push(-1);
    } else {
      res.push(a[j]);
      j++;
    }
  }

  return res;
}

function solution2(a) {
  var s =  a.filter(h => h > 0).sort((a, b) => a - b);
  return a.map(p => p > 0 ? s.shift() : p);
}

console.log(solution([5, 4, 3, 2, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1]));

console.log(solution2([5, 4, 3, 2, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1]));