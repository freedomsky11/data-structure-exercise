const print = console.log;

const clamp = (number, lower, upper) => {
   number = +number; // 将非数值参数转成数值类型, 对于不支持转成数字的值则转成NaN
   upper = upper === true || +upper === NaN ? 0 : +upper; // 将非数值参数转成数值类型, 对于不支持转成数字的值及true转成0
   lower = lower === true || +lower === NaN ? 0 : +lower; // 将非数值参数转成数值类型, 对于不支持转成数字的值及true转成0
   if (number !== NaN) { // 若number不能转换成数值则不作处理
     number = number > upper ? upper : number; // 大于上限则取上限
     number = number < lower ? lower : number; // 小于下限则取下限，若上限小于下限则此处一并处理
   }
   return number;
}

print('01：-1, 2, 3 => \n', clamp(-1, 2, 3));
// => 2
print('02：2, -2, 3 => \n', clamp(2, -2, 3));
// => 2
print('03：4, -2, 3 => \n', clamp(4, -2, 3));
// => 3
print('04：1, 2, -3 => \n', clamp(1, 2, -3));
// => 2
print('05：-2, 8 ,-1 => \n', clamp(-2, 8 ,-1));
// => 8
print('06：\'a\', 2, 3 => \n', clamp('a', 2, 3));
// => NaN
print('07：1, \'a\', 3 => \n', clamp(1, 'a', 3));
// => 1
print('08：1, \'a\', \'b\' => \n', clamp(1, 'a', 'b'));
// => 0
print('09：1, \'5\', \'6\' => \n', clamp(1, '5', '6'));
// => 5