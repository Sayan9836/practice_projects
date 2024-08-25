// basic 1 example

function curry1(a) {
  return function (b) {
    return a + b;
  };
}

const partial1 = curry1(10);

console.log(partial1(5));
console.log(partial1(10));

// basic 2 example

function curry2(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

function Multiply(a, b, c) {
  return a * b * c;
}

const partial2 = curry2(Multiply)(10);
console.log(partial2(2)(2));
console.log(partial2(3)(4));

//medium example

const curry3 = function (fn) {
  const len = fn.length;

  return function curryed(...args) {
    if (args.length === len) {
      return fn(...args);
    } else {
      return (...newArgs) => curryed(...args, ...newArgs);
    }
  };
};

const sum = (a, b, c, d) => {
  return a + b + c + d;
};

const partial3 = curry3(sum)(10)(2);

console.log(partial3(3)(5));

// advance example

const outerFunction = (fn) => {
  let length = fn.length;
  return function curryied(...args) {
    if (args.length === length) {
      return fn(...args);
    } else {
      return (...curr) => curryied(...curr, ...args);
    }
  };
};

const multiply = (a, b, c) => {
  return a * b * c;
};

const currRef = outerFunction(multiply);

console.log(currRef(1)(2)(4));
