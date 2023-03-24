const inc = (arg) => arg + 1;

const inc_another = (arg) => arg + 1;

const inc_old = function inc_old(arg) {
  return arg + 1;
};

res1 = inc(4);
res2 = inc_old(4);

console.log(res1);
console.log(res2);
