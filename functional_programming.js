function consoleLog(val) {
  console.log(val);
  return val;
}

consoleLog("Hello");

function doubleIt(num) {
  return num * 2;
}

function objectMaker(val) {
  return {
    prop: val,
  };
}

var result = objectMaker(20);
consoleLog(result);
var double = doubleIt(10).toString();
consoleLog(double);

result_double = objectMaker(doubleIt(100));
consoleLog(result_double);
