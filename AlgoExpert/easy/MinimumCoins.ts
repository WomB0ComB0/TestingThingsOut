export function nonConstructibleChange(coins: number[]) {
  let change = 0;
  coins.sort((a,b) => a - b);
  if (coins.length == 0 || coins[0] > 1)  return 1;
  for (const coin of coins){
    if (coin > change + 1) return change + 1;
    change += coin;
  }
  return change + 1;
}