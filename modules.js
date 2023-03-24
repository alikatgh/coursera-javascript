export default function addTwo(a, b) {
  console.log(a + b);
}

function addThree(a, b, c) {
  console.log(a + b + c);
}

function addFour(a, b, c, d) {
  console.log(a + b + c + d);
}

export function addFive(a, b, c, d, i) {
  console.log(a + b + c + d + i);
}

export { addFour, addThree };
