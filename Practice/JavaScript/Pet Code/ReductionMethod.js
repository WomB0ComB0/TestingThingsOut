// 1 without  initial value
const numbers = [1,2,3,4,5];
const sum = numbers.reduceRight(function(prev, cur) {return prev + cur;});

console.log(sum); // 15
// 2 with initial value
const prices = [1.5, 2.3, 3.1, 4.7, 5.0];
const taxRates = [0.05, 0.06, 0.07, 0.08, 0.09];

const totalCost = prices.reduceRight(function(prev, cur, index){
  const taxRate = taxRate[index];
  const costWithTax = cure + cur * taxRate;

  return prev + costWithTax;
}, 0);
console.log(totalCost.toFiex(2)); // 17.99