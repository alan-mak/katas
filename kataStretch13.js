const makeCase = function(input, caseStyle) {
  // Put your solution here
  // Have an empty string
  input = input.toLowerCase();
  let wordArr = input.split(" ");
  let output1 = case1(wordArr, caseStyle);
  let output2 = case2(output1, caseStyle);
  let output = case3(output2, caseStyle);
  return output;
};

// Apply Camel, Pascal, Snake, Kebab, Title
let case1 = function(wordArr, caseStyle) {
  if (caseStyle.includes("camel") || caseStyle.includes("pascal") || caseStyle.includes("snake") || caseStyle.includes("kebab") || caseStyle.includes("title")) {
    let output1 = [];
    if (caseStyle.includes("snake")) {
      output1 = wordArr.join("_");
    } else if (caseStyle.includes("kebab")) {
      output1 = wordArr.join(("-"));
    } else if (caseStyle.includes("title") || caseStyle.includes("pascal")) {
      for (let word of wordArr) {
        let newWord = "";
        for (let i = 0; i < word.length; i++) {
          if (i === 0) {
            newWord += word[i].toUpperCase();
          } else {
            newWord += word[i];
          }
        }
        output1.push(newWord);
      }
      if (caseStyle.includes("title")) {
        output1 = output1.join(" ");
      } else {
        output1 = output1.join("");
      }
    } else if (caseStyle.includes("camel")) {
      output1 = [wordArr[0]];
      for (let i = 1; i < wordArr.length; i++) {
        let newWord = "";
        for (let j = 0; j < wordArr[i].length; j++) {
          if (j === 0) {
            newWord += wordArr[i][j].toUpperCase();
          } else {
            newWord += wordArr[i][j];
          }
        }
        output1.push(newWord);
      }
      output1 = output1.join("");
    }
    return output1;
  } else {
    return wordArr.join(" ");
  }
};

// Vowels and Consonants
let case2 = function(string, caseStyle) {
  let newWord = "";
  if (caseStyle.includes("vowel")) {
    for (let letter of string) {
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        newWord += letter.toUpperCase();
      } else {
        newWord += letter;
      }
    }
    return newWord;
  } else if (caseStyle.includes("consonant")) {
    for (let letter of string) {
      if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u") {
        newWord += letter.toUpperCase();
      } else {
        newWord += letter;
      }
    }
    return newWord;
  } else {
    return string;
  }
};

// Upper or Lower
let case3 = function(string, caseStyle) {
  if (caseStyle.includes("lower")) {
    return string.toLowerCase();
  } else if (caseStyle.includes("upper")) {
    return string.toUpperCase();
  } else {
    return string;
  }
};
console.log(makeCase("this is a string1", "camel"));
console.log(makeCase("this is a string2", "pascal"));
console.log(makeCase("this is a string3", "snake"));
console.log(makeCase("this is a string4", "kebab"));
console.log(makeCase("this is a string5", "title"));
console.log(makeCase("this is a string6", "vowel"));
console.log(makeCase("this is a string7", "consonant"));
console.log(makeCase("this is a string8", ["upper", "kebab"]));