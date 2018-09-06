const print = console.log;

const first = array => {
  return (array != null && array.length && typeof array !== 'function') // 判断输入值是否为数组、字符串、类数组对象且长度大于0
  ? array[0]  // 数组、字符串、类数组对象且长度大于1的返回第一个元素。
  : undefined // 否则，返回undefined
}

print(`01：['1', '2'] => \n`, first(['1', '2']));
// => 1
print(`02：'HelloJS' => \n`, first('HelloJS'));
// => H
print(`03：[] => \n`, first([]));
// => undefined
print(`04：'' => \n`, first(''));
// => undefined
print(`05：{a: 1} => \n`, first({a: 1}));
// => undefined
print(`06：NaN => \n`, first(NaN));
// => undefined
print(`07：null => \n`, first(null));
// => undefined
print(`08：undefined => \n`, first(undefined));
// => undefined
print(`09：123 => \n`, first(123));
// => undefined
print(`10：item => item => \n`, first(item => item));
// => undefined
print(`11：true => \n`, first(true));
// => undefined
print(`12：{ 0: 1 } => \n`, first({ 0: 1 }));
// => undefined

let test = item => item;
test[0] = 99;
print(`13：test => \n`, first(test));
// => undefined