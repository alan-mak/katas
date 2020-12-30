const calculateChange = function(total, cash) {
  // Your code here
  let owed = cash - total;
  let change = {};
  let billName = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny'];
  let billAmount = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  for (let i = 0; i < billAmount.length; i++) {
    if (Math.floor(owed / billAmount[i]) === 0) {
      continue;
    } else {
      change[billName[i]] = Math.floor(owed / billAmount[i]);
      owed %= billAmount[i];
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));