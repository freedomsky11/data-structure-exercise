const print = console.log;

const indexOf = (array, value, fromIndex) => {
  if (array == null || !array.length) return -1; // null/undefined及非数组/字符串/类数组对象，以及长度为零的数组、字符串、类数组对象返回 -1
  let idx = +fromIndex; // 将fromIndex转成数值
  idx = idx !== idx ? 0 : idx; // 如果idx为NaN，则从索引0开始查找数据
  idx = idx > 0 ? Math.floor(idx) : Math.ceil(idx); // 根据idx正负值进行取整
  if (idx < 0) idx = Math.max(idx + array.length, 0); // 如果idx为小于0的整数，则加上array长度，计算正序起始索引，计算后小于零就从0开始。
  do {
    if (array[idx] === value) return idx;
  }
  while (++idx < array.length);
  return -1;
}

print(`01：
[1, 2, 1, 2],
2
=>`, indexOf([1, 2, 1, 2], 2));
// => 1
print(`02：
[1, 2, 1, 2, 3, 8],
2,
2
=>`, indexOf([1, 2, 1, 2, 3, 8], 2, 2));
// => 3
print(`03：
[1, 2, 1, 2, 3, 8],
2,
-3
=>`, indexOf([1, 2, 1, 2, 3, 8], 2, -3));
// => -1
print(`04：
[1, 2, 1, 2, 3, 8],
2,
-0.9
=>`, indexOf([1, 2, 1, 2, 3, 8], 2, "-0.9"));
// => 1
print(`05：
[1, 2, 1, 2, 3, 8],
2,
-3.9
=>`, indexOf([1, 2, 1, 2, 3, 8], 2, "-3.9"));
// => -1
print(`06：
[1, 2, 1, 2, 3, 8],
2,
-0.9
=>`, indexOf([1, 2, 1, 2, 3, 8], 4, "-0.9"));
// => -1