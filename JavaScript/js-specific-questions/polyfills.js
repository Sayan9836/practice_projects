const obj1 = {
  firstname: "sayan",
  lastname: "maity",
};

const obj2 = {
  firstname: "ayan",
  lastname: "maity",
};

const reusable = function (hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      hometown +
      " " +
      state +
      " " +
      country,
  );
};

// reusable.call(obj1, "kolkata");
// reusable.apply(obj2, ["Kolkata"]);

const later = reusable.bind(obj1, "Kolkata", "westbengal");

console.log(later("India"));

Function.prototype.myBind = function (...args) {
  let params = args.slice(1);
  return (...args2) => {
    this.apply(args[0], [...params, ...args2]);
  };
};

const REF = reusable.myBind(obj1, "kolkata", "westbengal");

console.log(REF("India"));
