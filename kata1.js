const sumLargestNumbers = function(data) {
  // Put your solution here
  let small = null;
  let big = null;

  for (let i = 0; i <= data.length; i++) {
    if (big === null) {
      big = data[i];
    } else if (data[i] > big) {
      small = big;
      big = data[i];
    } else if (small === null || small < data[i]) {
      small = data[i];
    }
  }
  return big + small;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([1, 1, 1, 1, 1]));
console.log(sumLargestNumbers([100,1, 0, 1, 1]));