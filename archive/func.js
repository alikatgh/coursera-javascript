var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

function al(arr) {
  // comment
  for (var i = 0; i < arr.length; i++) {
    // code goes here
    console.log(i + 1, arr[i]);
  }
}

al(colors); //display all items in the array at once

console.log("------------------");

function al_s(arr_s) {
  // comment
  for (var i = 0; i < arr_s.length; i++) {
    if (arr_s[i] == "red") {
      console.log((i + 1) * 10, "not red, but tomato!");
    } else {
      console.log((i + 1) * 10, arr_s[i]);
    }
  }
}

al_s(colors);
