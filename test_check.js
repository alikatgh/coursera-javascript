function two() {
  return 2;
}

function one() {
  return 1;
}

function calculate(initialValue, incrementValue) {
  return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));
