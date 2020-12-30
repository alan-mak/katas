const urlDecode = function(text) {
  // Put your solution here
  let decoded = {};
  let text2 = text.replace(/%20/g, " ");
  let keyValue = text2.split("&");
  for (let i = 0; i < keyValue.length; i++) {
    let key = "";
    let value = "";
    let j = 0;
    while (keyValue[i][j] !== "=") {
      key += keyValue[i][j];
      j++;
    }
    let k = keyValue[i].length - 1;
    while (keyValue[i][k] !== "=") {
      value += keyValue[i][k];
      k--;
    }
    let value2 = "";
    for (j = value.length - 1; j >= 0; j--) {
      value2 += value[j];
    }
    decoded[key] = value2;
  }
  return decoded;
};

console.log(urlDecode("duck=rubber")); //{duck: "rubber"}
console.log(urlDecode("bootcamp=Lighthouse%20Labs")); //{bootcamp: "Lighthouse Labs"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); //{city: "Vancouver", weather: "lots of rain"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); //"lots of rain"