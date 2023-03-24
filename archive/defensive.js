var smth = "word";
var smth2 = "word";

function letterFinder(word, match) {
  condition1 = typeof word == "string" && word.length >= 2;
  condition2 = typeof match == "string" && match.length == 1;
  if (condition1 == true && condition2 == true) {
    for (i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.");
  }
}

letterFinder([], []);
