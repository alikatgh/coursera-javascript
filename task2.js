// Task 1

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (item in dairy) {
    console.log(dairy[item]);
  }
}

logDairy();

// Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (prop in bird) {
  }
}

// Task 3
