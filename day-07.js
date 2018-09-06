const print = console.log;

const filter = (array, condition) => {
  if (array == null || !array.length) return []; // null/undefined及非数组/字符串/类数组对象，以及长度为零的数组、字符串、类数组对象返回空数组
  if (condition == null) return array; // condition为null或undefined直接返回原数组
  if (typeof condition !== "function") return []; // condition不是函数则返回空数组
  let resArray = [];
  let resIdx = 0;
  let idx = 0;
  do {
    if (condition(array[idx], idx, array)) resArray[resIdx++] = array[idx]; // 原来考虑用push方法，看了徐帅的答案觉得还是直接索引性能高
  } while (++idx < array.length);
  return resArray;
}

const users = [{
    'user': 'barney',
    'active': true
  },
  {
    'user': 'fred',
    'active': false
  }
];

const scores = [100, '90', '88', 97, 99];

print(filter(users, ({
  active
}) => active));
// => [{ 'user': 'barney', 'active': true }]

print(filter(scores, item => item === +item));
// => [100, 97, 99]

print(filter(null, item => item === +item));
// => []

print(filter(undefined, item => item === +item));
// => []

print(filter(NaN, item => item === +item));
// => []

print(filter(123, item => item === +item));
// => []

print(filter('123', item => item === +item));
// => []