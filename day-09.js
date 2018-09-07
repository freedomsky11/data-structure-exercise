const print = console.log;

const isObject = val => {
  return val != null &&
  typeof val === "object" ||
  typeof val === 'function'
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