const print = console.log;

const invert = val => {
  let newObj = {}; // 生成新的对象
  for (let key in val) { // 遍历原有对象可枚举属性，使用该方法会排除掉对象外的值
    if (val.hasOwnProperty(key)) { // 判断属性是否为自有属性
      let element = val[key]; 
      element = (element != null && typeof element.toString !== 'function') ? // 判断属性值是否有toString方法，因为null/undefined的转换比较特俗，所以需要额外排除
       Object.prototype.toString.call(element) : // 由于只有object类型的toSring方法可以被改写，所以这里使用Object.prototype.toSring
       element;
      newObj[element] = key;
    }
  }
  return newObj;
};

const object = { 'a': 1, 'b': 2, 'c': 3, 'd': { x: 1 } };

print(invert(object));
// => { '1': 'a', '2': 'b', '3': 'c', '[object Object]': 'd' }

print(invert([1,2,3]));

print(invert(123));

print(invert('123'));

print(invert(true));

print(invert(false));

print(invert(null));

print(invert(undefined));

print(invert(NaN));

object['d'].toString = null;

print(invert(object));
// => { '1': 'a', '2': 'b', '3': 'c', '[object Object]': 'd' }

const object2 = { 'a': null, 'b': undefined, 'c': NaN, 'd': { x: 1 }, 'e': [1,2] };

print(invert(object2));