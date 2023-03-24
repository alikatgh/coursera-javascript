// // fn - first number
// for (var fn = 0; fn < 2; fn++) {
//   console.log(fn);
// }

// console.log("-------------");

// // sn - second number
// for (var sn = 0; sn < 10; sn++) {
//   console.log(sn);
// }

// console.log("-------------");

// nested loops - one inside another

for (var fn = 0; fn < 2; fn++) {
  for (var sn = 0; sn < 10; sn++) {
    console.log(fn + ", " + sn);
  }
}

for (var fn = 0; fn < 2; fn++) {
  for (var sn = 0; sn < 10; sn++) {
    console.log(fn + " times " + sn + " equals " + fn * sn);
  }
}

for (var i = 100; i > 10; i = i - 10) {
  for (var j = 10; j > 4; j = j - 5) {
    console.log(i + " divided by " + j + " equals " + i / j);
  }
}
