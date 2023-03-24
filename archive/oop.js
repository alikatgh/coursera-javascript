// class Animal {
//   /* ...class code here... */
// }

// var myDog = Object.create(Animal);

// console.log(Animal);

// class Animal {
//   /* ...class code here... */
// }

// var myDog = new Animal();

// console.log(Animal);

class Animal {
  /* ...class code here... */
}
class Bird extends Animal {
  /* ...class code here... */
}
class Eagle extends Bird {
  /* ...class code here... */
}

const bicycle = {
  bell: function () {
    return "Ring, ring! Watch out, please!";
  },
};
const door = {
  bell: function () {
    return "Ring, ring! Come here, please!";
  },
};

var bic = bicycle.bell(); // "Get away, please"
var doo = door.bell(); // "Get away, please"
// console.log(bic, "\n", doo);

function ringTheBell(thing) {
  console.log(thing.bell());
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // Ring, ring! Watch out, please!
