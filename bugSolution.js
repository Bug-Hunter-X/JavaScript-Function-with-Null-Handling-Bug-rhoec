function foo(a, b) {
  // Handle null, undefined, and NaN values
  a = a === null || a === undefined || isNaN(a) ? 0 : parseFloat(a);
  b = b === null || b === undefined || isNaN(b) ? 0 : parseFloat(b);
  return a + b; 
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined,5)); // Output: 5
console.log(foo(NaN,5)); //Output: 5
console.log(foo(5,undefined)); // Output: 5
console.log(foo(5,NaN)); //Output: 5