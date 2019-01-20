const first = (a) => (b) => a;
const second = (a) => (b) => b;
const T = first; 
const F = second;

//for console logging 
T.inspect = () => "true";
F.inspect = () => "false";

const not = f => f(F)(T);
const and = f => a => f(a)(f);
const or  = f => a => f(f)(a);
const eq  = f => a => f(a)(not(a));
const xor = f => a => f(not(a))(a);

var firstArgument = first(5)(10);
console.log(firstArgument);

var secondArgument = second(5)(10);
console.log(secondArgument);

var secondArgument = second(5)(10);
console.log(secondArgument);

console.log(and(T)(T)); // true
console.log(and(T)(F)); // false
console.log(and(F)(F)); // false
console.log(and(F)(T)); // false

console.log(or(T)(T)); // true
console.log(or(T)(F)); // true
console.log(or(F)(F)); // false
console.log(or(F)(T)); // true

console.log(eq(T)(T)); // true
console.log(eq(T)(F)); // false
console.log(eq(F)(F)); // true
console.log(eq(F)(T)); // false

console.log(xor(T)(T)); // false
console.log(xor(T)(F)); // true
console.log(xor(F)(F)); // false
console.log(xor(F)(T)); // true
