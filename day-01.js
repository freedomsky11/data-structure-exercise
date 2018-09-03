const print = console.log;

const isLength = value => {
    let num = +value; // 将非数值输入值转成数值类型, 对于不支持转成数字的值则转成NaN
    return value !== null && // 排除null
    typeof value !== 'boolean' && // 排除true/false
     num % 1 === 0 && // 确保输入值为整数且排除NaN即没转成有效数字的值
     num >= 0 && num <= Math.pow(2,32) - 1; // 排除范围之外的值
}

print('01：-0 => \n', isLength(-0));
// => true
print('02：NaN => \n', isLength(NaN));
// => false
print('03：1 => \n', isLength(1));
// => true
print('04：-1 => \n', isLength(-1));
// => false
print('05：0 => \n', isLength(0));
// => true
print('06：1.1 => \n', isLength(1.1));
// => false
print('07：4294967295 => \n', isLength(4294967295));
// => true
print('08：-4294967295 => \n', isLength(-4294967295));
// => false
print('09：4294967296 => \n', isLength(4294967296));
// => false
print('10：{ x: 1 } => \n', isLength({ x: 1 }));
// => false
print('11：new Number(1) => \n', isLength(new Number(1)));
// => true
print('12：new Number(4294967295) => \n', isLength(new Number(4294967295)));
// => true
print('13：new Number(4294967296) => \n', isLength(new Number(4294967296)));
// => false
print('14：true => \n', isLength(true));
// => false
print('15：false => \n', isLength(false));
// => false
print('16：null => \n', isLength(null));
// => false