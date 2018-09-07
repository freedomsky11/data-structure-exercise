const print = console.log;

const getValue = (object, path, defaultValue) => {
  if (path == null || !path.length) return; // 处理不传path或者path非string，数组，类数组情况
  let res = object;
  let idx = 0;
  while(res != undefined && idx < path.length) { // 一旦出现undefined/null则停止循环
    res = res[path[idx++]];
  }
  return (res === undefined || idx < path.length) ? defaultValue : res; // 当查询结束时res为undefined或循环中途退出时，则返回defaultValue
}

print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', '0', 'b', 'c']));
// => 3

print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', 0, 'b', 'c']));
// => 3

print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', 1, 'b', 'c']));
// => undefined

print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', 1, 'b', 'c'], 0));
// => 0

print(getValue({ 'a': { 'b': { 'c': 3 } } }, ['a', 'd', 'c']));
// => undefined

print(getValue({ 'a': { 'b': { 'c': 3 } } }, ['a', 'd', 'c'], 0));
// => 0

print(getValue(null, ['a', 0, 'b', 'c'], 0));
// => 0

print(getValue(null, ['a', 0, 'b', 'c']));
// => undefined

print(getValue(undefined, ['a', 0, 'b', 'c'], 0));
// => 0

print(getValue(undefined, ['a', 0, 'b', 'c']));
// => undefined

print(getValue(NaN, ['a', 0, 'b', 'c'], 0));
// => 0

print(getValue(NaN, ['a', 0, 'b', 'c']));
// => undefined

print(getValue(NaN));
// => undefined

print(getValue(true, ['a', 0, 'b', 'c'], 0));
// => 0

print(getValue(true, ['a', 0, 'b', 'c']));
// => undefined

print(getValue(false, ['a', 0, 'b', 'c'], 0));
// => 0

print(getValue(false, ['a', 0, 'b', 'c']));
// => undefined

print(getValue('123', [1], 0));
// => 2

print(getValue('123', [1]));
// => 2

print(getValue(123, [1], 0));
// => 0

print(getValue(123, [1]));
// => undefined

print(getValue('123', 1, 0));
// => undefined

print(getValue('123', 1));
// => undefined

print(getValue('123', true, 0));
// => undefined

print(getValue('123', true));
// => undefined

print(getValue('123', false, 0));
// => undefined

print(getValue('123', false));
// => undefined

print(getValue('123', '1', 0));
// => 2

print(getValue('123', '1'));
// => 2

print(getValue('123', {0:1, length: 1}, 0));
// => 2

print(getValue('123', {0:1, length: 1}));
// => 2

print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, 'a0bc'));
// => 3

print(getValue([1,null,2], [1, 0], 0));
// => 0

print(getValue([1,null,2], [1], 0));
// => 0
