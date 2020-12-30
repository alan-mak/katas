const camelCase = function(input) {
  // Your code here
  let words = input.split(" ");
  let newWord = words[0];
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j === 0) {
        newWord += words[i][j].toUpperCase();
      } else {
        newWord += words[i][j];
      }
    }
  }

  return newWord;
};

console.log(camelCase("this is a string!")); //thisIsAString
console.log(camelCase("loopy lighthouse")); //loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious