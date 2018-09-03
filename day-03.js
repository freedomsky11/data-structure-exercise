const print = console.log;

const first = array => {
  return (array != null && array.length)
  ? array[0]
  : undefined
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
