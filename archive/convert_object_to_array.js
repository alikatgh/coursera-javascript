const result = []; // empty array

const drone = {
  // object drone
  speed: 100,
  color: "yellow",
};

const droneKeys = Object.keys(drone); // new class droneKeys?

//forEach() method accepts a function that will work on each array item.
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});

console.log(result);
