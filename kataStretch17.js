const blocksAway = function(directions) {
  // Put your solution here
  let x = 0;
  let y = 0;
  let facing = 'north';
  let counter = 0, compass = ['north', 'east', 'south', 'west'];

  for (let i = 0; i < directions.length; i += 2) {
  //East or West
    switch (counter % 2) {
    case 0:
      if ((directions[i] === 'right' && facing === 'north') || (directions[i] === 'left' && facing === 'south')) {
        facing = 'east';
        x += directions[i + 1];
      } else if ((directions[i] === 'left' && facing === 'north') || (directions[i] === 'right' && facing === 'south')) {
        facing = 'west';
        x -= directions[i + 1];
      }
      counter++;
      break;
    //North or South
    case 1:
      if ((directions[i] === 'left' && facing === 'east') || (directions[i] === 'right' && facing === 'west')) {
        facing = 'north';
        y += directions[i + 1];
      } else if ((directions[i] === 'right' && facing === 'east') || (directions[i] === 'left' && facing === 'west')) {
        facing = 'south';
        y -= directions[i + 1];
      }
      counter++;
      break;
    }
  }
  let Dir = {};
  if (x < 0) {
    Dir[compass[3]] = Math.abs(x);
  } else if (x >= 0) {
    Dir[compass[1]] = x;
  }
  // console.log(xDir)
  if (y < 0) {
    Dir[compass[2]] = Math.abs(y);
  } else if (y >= 0) {
    Dir[compass[0]] = y;
  }
  return Dir;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));