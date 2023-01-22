// object, array, map, set

// forEach
// filter
// map

const fruits = ["kiwi", "mango", "apple", "pear"];

function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
  console.log(num > 20);
});

[0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});

[1].map(function (num) {
  return num / 1;
});
