const print = console.log;

let mapObject = (object, iteratee) => {
  let array = []; // 生成新的数组
  let idx = 0; // 生成新的索引
  iteratee = typeof iteratee === 'function' ? iteratee : val => val;// 判断iteratee是否传入及是否为函数，若没有或不是函数则直接返回属性值
  for (let key in object) { // 遍历原有对象可枚举属性，使用该方法会排除掉对象外的值
    if (object.hasOwnProperty(key)) { // 判断属性是否为自有属性
      array[idx++] = iteratee(object[key], key, object);
    }
  }
  return array;
};

const obj = { a: 1, b: 2 };

print(mapObject(obj));
// => [1, 2]

print(mapObject(obj, val => val));
// => [1, 2]

print(mapObject(obj, (val, key) => key + val));
// => ['a1', 'b2']

// test variable: object
print(mapObject(null));
print(mapObject(undefined));
print(mapObject(123));
print(mapObject(NaN));
print(mapObject('123'));
print(mapObject([1,2,3]));
print(mapObject(true));
print(mapObject(false));

// test variable: iteratee
print(mapObject(obj, null));
print(mapObject(obj, undefined));
print(mapObject(obj, 123));
print(mapObject(obj, NaN));
print(mapObject(obj, '123'));
print(mapObject(obj, [1,2,3]));
print(mapObject(obj, true));
print(mapObject(obj, false));