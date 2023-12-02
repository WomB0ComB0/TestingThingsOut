let d = 256;

function search(pat, txt, q) {
  let M = pat.length;
  let N = txt.length;
  let i, j;
  let p = 0;
  let t = 0;
  let h = 1;

  for (i = 0; i < M - 1; i++) {
    h = (h * d) % q;
  }

  for (i = 0; i < M; i++) {
    p = (d * p + pat.charCodeAt(i)) % q;
    t = (d * t + txt.charCodeAt(i)) % q;
  }

  for (i = 0; i <= N - M; i++) {
    if (p === t) {
      for (j = 0; j < M; j++) {
        if (txt[i + j] !== pat[j]) {
          break;
        }
      }
      if (j === M) {
        console.log(`Pattern found at index ${i}`);
      }
    }
    if (i < N - M) {
      t = (d * (t - txt.charCodeAt(i) * h) + txt.charCodeAt(i + M)) % q;
      if (t < 0) {
        t = t + q;
      }
    }
  }
}

// Driver code
let txt = "GEEKS FOR GEEKS";
let pat = "GEEK";

// A prime number
let q = 101;

// Function Call
search(pat, txt, q);