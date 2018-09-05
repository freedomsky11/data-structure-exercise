const print = console.log;

const chunk = (array, size) => {
  if (array == null || !array.length) return []; // null/undefined及非数组/字符串/类数组对象，以及长度为零的数组、字符串、类数组对象返回空数组
  size = size === undefined ? 1 : size; // 若不输入size或输入undefined，则取默认值1
  size = Math.floor(+size); // 将size转成数值并向下取整
  if (size !== size || size < 1) return []; // 若size为NaN或小于1则返回空数组
  let idx = 0;
  let newIdx = 0;
  let newArray = [];
  do {
    newArray[newIdx++] = array.slice(idx, idx += size);
  } while (idx < array.length);
  return newArray;
}

print(`01：
['a', 'b', 'c', 'd'],
2
=>`, chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]
print(`02：
['a', 'b', 'c', 'd'],
3
=>`, chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]
print(`03：
null,
3
=>`, chunk(null, 3));
// => []
print(`04：
undefined,
3
=>`, chunk(undefined, 3));
// => []
print(`05：
['a', 'b', 'c', 'd']
=>`, chunk(['a', 'b', 'c', 'd']));
// => [['a', 'b'], ['c', 'd']]
print(`06：
['a', 'b', 'c', 'd'],
undefined
=>`, chunk(['a', 'b', 'c', 'd'], undefined));
// => [['a', 'b'], ['c', 'd']]
print(`07：
['a', 'b', 'c', 'd'],
'a'
=>`, chunk(['a', 'b', 'c', 'd'], 'a'));
// => [['a', 'b'], ['c', 'd']]