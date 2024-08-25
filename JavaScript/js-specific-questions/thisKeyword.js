var a = 10;
const obj1 = {
  a: 20,
  example1: function () {
    const anc = {
      a: 5,
      example11: () => {
        console.log(this);
      },
    };

    return anc;
  },
};

const var1 = obj1.example1().example11();

//next

var b = 15;
var a = 13; // not ascessable if let or const
const OuterFunction = function () {
  let a = 10;

  console.log(this.a);

  return function () {
    console.log(this.b);
  };
};

const obj = {
  b: 10,
};

const wrapper = OuterFunction().call(obj); // explicitely setting the context of this
