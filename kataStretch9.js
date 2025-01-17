// Use the value below whenever you need the value of Pi
const PI = 3.14159;
const sphereVolume = function(radius) {
  // Code here!
  if (radius < 0) {
    return undefined;
  } else {
    let volume = (4 / 3) * PI * Math.pow(radius, 3);
    return volume;
  }
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  // And here!
  if (radius < 0 || height < 0) {
    return undefined;
  } else {
    let volume = (1 / 3) * PI * height * Math.pow(radius, 2);
    return volume;
  }
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  // Probably here too!
  if (height < 0 || width < 0 || depth < 0) {
    return undefined;
  } else {
    let volume = (height * width * depth);
    return volume;
  }
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  // Code here? Yup!
  let ans = 0;
  for (let solid of solids) {
    if (solid.type === 'sphere') {
      ans += sphereVolume(solid.radius);
    } else if (solid.type === 'prism') {
      ans += prismVolume(solid.height, solid.width, solid.depth);
    } else if (solid.type === 'cone') {
      ans += coneVolume(solid.radius, solid.height);
    } else {
      console.log('Unidentified Shape!');
    }
  }
  return ans;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);