const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

// Task 3
function animalCan(obj) {
  for (const key in obj) {
    console.log(key + ": " + obj[key]);
  }
}

animalCan(bird);
