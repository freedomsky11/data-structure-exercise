const print = console.log;

const mapToArray = map => {
  if (map instanceof Map) return Array.from(map); // 如果输入的为map对象，则生成数组
  return []; // 否则返回空数组
}

const map = new Map();

let keyString = "a string";
let keyObj = {};
let keyFunc = function () {};

map.set(keyString, "value associated with 'a string'");
map.set(keyObj, 'value associated with keyObj');
map.set(keyFunc, 'value associated with keyFunc');

print(map);

print(mapToArray(map));

// test variable: map
print(mapToArray(null));
print(mapToArray(undefined));
print(mapToArray(123));
print(mapToArray(NaN));
print(mapToArray('123'));
print(mapToArray([1,2,3]));
print(mapToArray(true));
print(mapToArray(false));

// // test variable: iteratee
// print(mapToArray(obj, null));
// print(mapToArray(obj, undefined));
// print(mapToArray(obj, 123));
// print(mapToArray(obj, NaN));
// print(mapToArray(obj, '123'));
// print(mapToArray(obj, [1,2,3]));
// print(mapToArray(obj, true));
// print(mapToArray(obj, false));