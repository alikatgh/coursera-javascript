counter = 10;
while (counter > 0) {
  counter = counter - 1;
  for (var i = 1; i >= 3; i++) {
    // why recursiev is heppening here?
    console.log("This is line ", i);
  }
  console.log();
}

var i = 0;
while (i <= 4) {
  i = i + 1;
  console.log(i);
}
console.log("Counting completed!");
