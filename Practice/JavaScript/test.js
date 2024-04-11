/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  let result = [];
  result.push(deck.pop());
  while (deck.length > 0) {
    result.unshift(result.pop());
    result.unshift(deck.pop());
  }
  return result;
};