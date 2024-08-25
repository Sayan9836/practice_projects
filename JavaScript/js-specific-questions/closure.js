// // basic example
// function outerFunction() {
//   let a = 10;
//   return function () {
//     return function () {
//       return a;
//     };
//   };
// }

// console.log(outerFunction()()());

// //medium example

// function outerFunction1(time) {
//   cashed_data = {};

//   return async function (URL) {
//     const key = generateKey(URL.toString());

//     if (!cashed_data[key] || Date.now() > cashed_data[key].expiry_time) {
//       console.log("calling new api");
//       const data = await callnewApi(URL);
//       cashed_data[key] = { data, expiry_time: Date.now() + time };
//     } else {
//       console.log("return value from cached data");
//       return cashed_data[key].data;
//     }

//     return cashed_data[key].data;
//   };
// }
// const generateKey = (url) => {
//   return url;
// };

// const callnewApi = async (url) => {
//   let res = await fetch(url);
//   res = await res.json();
//   return res;
// };

// const GET_REF = outerFunction1(10000);

// GET_REF("https://jsonplaceholder.typicode.com/todos/1").then((first) =>
//   console.log("first -> ", first),
// );

// setTimeout(() => {
//   GET_REF("https://jsonplaceholder.typicode.com/todos/2").then((second) =>
//     console.log("second -> ", second),
//   );
// }, 2000);

// setTimeout(() => {
//   GET_REF("https://jsonplaceholder.typicode.com/todos/1").then((third) =>
//     console.log("third -> ", third),
//   );
// }, 3000);

// setTimeout(() => {
//   GET_REF("https://jsonplaceholder.typicode.com/todos/1").then((forth) =>
//     console.log("forth -> ", forth),
//   );
// }, 4000);

// advance example

const cacheMyData = (time) => {
  const cache = {};

  return async (url) => {
    const key = url.toString();

    if (!cache[key] || cache[key].expiry < Date.now()) {
      let data = await fetch(url);
      data = await data.json();

      if (data.ok) {
        cache[key] = { data: data, expiry: Date.now() + time };
      }
    } else {
      return cache[key].data;
    }

    return cache[key].data;
  };
};

const cachedREF = cacheMyData(3000);
