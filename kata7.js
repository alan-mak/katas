const checkAir = function(samples, threshold) {
  // Code here!
  let counter = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      counter += 1;
    }
  }
  let results = (counter / samples.length).toFixed(2);
  if (results < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));