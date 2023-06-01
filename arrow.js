// Arguments binding: Arrow functions do not have an arguments binding. However,
// they have access to the arguments object of the closest non-arrow parent function.
// Named and rest parameters are heavily relied upon to capture the arguments passed to
// arrow functions.
// function x() {
//   console.log(arguments); // { name: "ram"};
// }

// var obj = {
//   name: "ram",
// };

// x(obj);

// const y = () => {
//   console.log(...arguments); // {}
// };

// y(obj);

// use of this keyword : Unlike regular functions, arrow functions do not have their own this.
// The value of this inside an arrow function remains the same throughout the lifecycle of the
// function and is always bound to the value of this in the closest non-arrow parent function.

// function run() {
//   console.log(this); // global object if run is called without obj run()
//   console.log(this.name); // run(details)
// }

const walk = () => {
  console.log(this); //{} when walk()
  console.log(this.name); // undefined when walk(details)
};
walk(details);

var details = {
  name: "sethu",
};

// use of new keyword  : Regular functions created using function declarations or expressions are constructible and callable. Since regular functions are constructible, they can be called using the new keyword.
// However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.
let add = (x, y) => console.log(x + y);
new add(2, 3); // add is not a constructor

// No duplicate named parameters

function add(x, x) {} // it will work

("use strict");
function add(x, x) {}
// SyntaxError: duplicate formal argument x

(x, x) => {};
// SyntaxError: duplicate argument names not allowed in this context
