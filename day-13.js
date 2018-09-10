const print = console.log;

const slice = (array, start, end) => {
  if (array == null || !array.length) return []; // null/undefined及非数组/字符串/类数组对象，以及长度为零的数组、字符串、类数组对象返回空数组
  start = +start; // 将start转成数值类型
  start !== start && (start = 0); // 若为NaN则，将start设为默认值0;
  start = start < 0 ? Math.max(0, Math.ceil(start) + array.length) : Math.floor(start); // 若为负数则向上取整，且计算正序偏移量，否则向下取整
  end = end === undefined ? array.length : +end; // 若未传end，则默认值为array.length。否则，将end转成数值类型
  end !== end && (end = 0); // 若为NaN,则将end设为默认值0;
  end = end < 0 ? Math.max(0, Math.ceil(end) + array.length) : Math.floor(end); // 若为负数则向上取整，且计算正序偏移量，否则向下取整
  let idx = start;
  let newArr = [];
  let newIdx = 0;
  while (idx < end && idx < array.length) {
    newArr[newIdx++] = array[idx++];
  }
  return newArr;
}

print(slice([1, 2, 3, 4, 5, 6, 7], 2));

print(slice([1, 2, 3, 4, 5, 6, 7], 2, 5));

print(slice([1, 2, 3, 4, 5, 6, 7], 2, 10));

print(slice([1, 2, 3, 4, 5, 6, 7], -2, 10));

print(slice([1, 2, 3, 4, 5, 6, 7], -2, -6));

print(slice([1, 2, 3, 4, 5, 6, 7], -6, -2));

// test variable: array
print(slice(null));
print(slice(undefined));
print(slice(123));
print(slice(NaN));
print(slice('123'));
print(slice([1, 2, 3]));
print(slice(true));
print(slice(false));

// // test variable: start
print(slice([1, 2, 3, 4, 5, 6, 7], null));
print(slice([1, 2, 3, 4, 5, 6, 7], undefined));
print(slice([1, 2, 3, 4, 5, 6, 7], 2));
print(slice([1, 2, 3, 4, 5, 6, 7], NaN));
print(slice([1, 2, 3, 4, 5, 6, 7], [1, 2, 3]));
print(slice([1, 2, 3, 4, 5, 6, 7], true));

// // test variable: end
print(slice([1, 2, 3, 4, 5, 6, 7], 1, null));
print(slice([1, 2, 3, 4, 5, 6, 7], 1, undefined));
print(slice([1, 2, 3, 4, 5, 6, 7], 1, 2));
print(slice([1, 2, 3, 4, 5, 6, 7], 1, NaN));
print(slice([1, 2, 3, 4, 5, 6, 7], 1, [1, 2, 3]));
print(slice([1, 2, 3, 4, 5, 6, 7], 1, true));

print(slice([1, 2, 3, 4, 5, 6, 7], 2.1));

print(slice([1, 2, 3, 4, 5, 6, 7], 2.1, 5.1));

print(slice([1, 2, 3, 4, 5, 6, 7], 2, 10));

print(slice([1, 2, 3, 4, 5, 6, 7], -2.1, 10));

print(slice([1, 2, 3, 4, 5, 6, 7], -2, -6));

print(slice([1, 2, 3, 4, 5, 6, 7], -6, -2));