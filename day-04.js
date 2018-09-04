const print = console.log;

const copyArray = (source, array) => {
  array = array != null ? array : []; // 如果array为null/undefined新建一个空数组
  let idx = 0;
  if (source != null && source.length) // 如果source有length属性且大于0则进行拷贝操作
    do { 
      array[idx] = source[idx];
    }
    while (++idx < source.length);
  return array;
}

print(`01：
new Array(1, 2, 3, 4, 5),
new Array()
=>`, copyArray(
  new Array(1, 2, 3, 4, 5),
  new Array()
));
// => [1, 2, 3, 4, 5]
print(`02：
new Array(1, 2, 3, 4, 5)
=>`, copyArray(
  new Array(1, 2, 3, 4, 5)
));
// => [1, 2, 3, 4, 5]
print(`03：
new Array(1, 2, 3, 4, 5),
new Array(100, 200, 300, 400, 500, 600)
=>`, copyArray(
  new Array(1, 2, 3, 4, 5),
  new Array(100, 200, 300, 400, 500, 600)
));
// => [1, 2, 3, 4, 5, 600]
print(`04：
new Array(1, 2, 3, 4, 5),
new Array(100, 200, 300)
=>`, copyArray(
  new Array(1, 2, 3, 4, 5),
  new Array(100, 200, 300)
));
// => [1, 2, 3, 4, 5]
print(`05：
{},
new Array(100, 200, 300)
=>`, copyArray({},
  new Array(100, 200, 300)
));
// => [1, 2, 3, 4, 5]
print(`06：
null,
new Array(100, 200, 300)
=>`, copyArray(
  null,
  new Array(100, 200, 300)
));
// => [1, 2, 3, 4, 5]
print(`07：
new Array(100, 200, 300),
null
=>`, copyArray(
  new Array(100, 200, 300),
  null
));
// => [100, 200, 300]
print(`08：
new Array(100, 200, 300),
'abc'
=>`, copyArray(
  new Array(100, 200, 300),
  'abc'
));
// => ?
print(`09：
new Array(100, 200, 300),
123
=>`, copyArray(
  new Array(100, 200, 300),
  123
));
// => ?