const squareCode = function(message) {
  let noSpace = message.replace(/ /g, "");
  let rows = Math.ceil(Math.sqrt(noSpace.length));
  let encode = "";
  let j = 0;
  let counter = 0;

  for (let i = 0; i < rows; i++) {
    for (j; j < noSpace.length; j += rows) {
      encode += noSpace[j];
    }
    counter++;
    j = 0;
    j += counter;
    encode += " ";
  }
  return encode;
};


console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));