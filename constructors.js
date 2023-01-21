// function Icecream(flavor) {
//   this.flavor = flavor;
//   this.meltIt = function () {
//     console.log(`The ${this.flavor} icecream has melted`);
//   };
// }

// let kiwiIcecream = new Icecream("kiwi");
// let appleIcecream = new Icecream("apple");
// console.log(kiwiIcecream); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
// console.log(appleIcecream); // --> Icecream {flavor: 'apple', meltIt: ƒ}

let apple = new String("apple");
apple; // --> String {'apple'}

const plum_f = "plum" === "plum";
let plum = new String("plum") === new String("plum");

console.log(plum);
console.log(plum_f);
