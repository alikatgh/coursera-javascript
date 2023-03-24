const f = ["a", "b", "c"];
const b = ["b1", "s"];

// Join arrays, objects using the rest operator
const f_b = [...f, ...b];
// console.log(f_b);

const fl = { wi: 2 };
const fb = { we: 4 };

// Join objects
const fc = { ...fl, ...fb };
// console.log(fc);

// Add new members to arrays without using the push() method
let ve = ["34", "23", "84"];
ve = [...ve, "84", "37"];

// console.log(ve);

// Convert a string to an array using the spread operator
const g = "Geee!";
const ac = [...g];
// console.log(ac);

// Copy either an object or an array into a separate one
const car1 = {
  speed: 200,
  color: "yellow",
};
const car2 = { ...car1 };
car1.speed = 201;
console.log(car1.speed, car2.speed);
