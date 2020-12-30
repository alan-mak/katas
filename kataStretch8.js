const multiplicationTable = function(maxValue) {
  // Your code here
  let ans = "";
  if (maxValue < 0) {
    return undefined;
    
  } else if (maxValue === 0) {
    return 0;

  } else {
    for (let i = 0; i < maxValue; i++) {
      for (let j = 0; j < maxValue; j++) {
        if (i === 0) {
          ans += ([j + 1] + " ");
        } else if (j === 0) {
          ans += ([i + 1] + " ");
        } else {
          ans = ans + ([i + 1] * [j + 1] + " ");
        }
      }
      ans += "\n";
    }
    return ans;
  }
};

for (let i = -1; i <= 12; i++) {
  console.log(i + " Table");
  console.log(multiplicationTable(i));
}