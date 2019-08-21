// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function hello (guest, me) {
  let greet = `Hello, ${guest}! `;
  function intro (name) {
    greet += `My name is ${name}.`
  }
  intro(me);
  return greet;
}

console.log(hello('Lambda','Emily'));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====

  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
    // 2- Declare a function `counter`.
  // It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  console.log('');
  console.log('CHALLENGE 2: ');

  let count = 0;
  const counterMaker = () => {

    function counter() {
      return count++;
    };
    return counter();
  }
  console.log(counterMaker()); //0
  console.log(counterMaker()); //1
  console.log(counterMaker()); //2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

console.log('');
console.log('CHALLENGE 3: ');

count = 0;
let limit = 5;

const counterMaker2 = () => {
  
  function counter() {
    return count++;
  };
  
  if (count <= limit) {
    return counter();
  } else {
    count = 1;
    return counter();
  }
}

console.log(counterMaker2()); //0
console.log(counterMaker2()); //1
console.log(counterMaker2()); //2
console.log(counterMaker2()); //3
console.log(counterMaker2()); //4
console.log(counterMaker2()); //5
console.log(counterMaker2()); //1


console.log('');
console.log('CHALLENGE 4: ');
// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====

let ch4 = 0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  const myCount = {
    increment: function(num) {
      num++;
      return num;
    },
    decrement: function(num) {
      num--;
      return num;
    },
  }
  return myCount;
};

console.log((counterFactory()).increment(ch4));
console.log((counterFactory()).increment(ch4));
console.log((counterFactory()).decrement(ch4));