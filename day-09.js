const print = console.log;

const isObject = val => {
  return val != null && // 排除掉typeof null == 'object' => true的情况，及顺道排除undefined
  typeof val === "object" || // object类型为true
  typeof val === 'function' // function本质也是对象
}

print(isObject({}));
// => true

print(isObject(new Number(1)));
// => true

print(isObject([1, 2]));
// => true

print(isObject(new Boolean(false)));
// => true

print(isObject(new String('hello, js')));
// => true

print(isObject(function ( ) { }));
// => true

print(isObject(null));
// => false

print(isObject(1));
// => false

print(isObject(false));
// => false

print(isObject('hello, js'));
// => false

print(isObject(undefined));
// => false