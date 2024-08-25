// //Highlight the words in the string

// const str = "Ultimate JavaScript / FrontEnd Guide";
// const keyword = ["front", "End", "JavaScript"];

// let outPut = "";

// const highlight = (str, keyword) => {
//   const keyWords = new Set(keyword);

//   let words = str.split(" ");
//   console.log(words);

//   const results = words.map((word) => {
//     outPut = "";
//     if (keyWords.has(word)) {
//       outPut = `<strong>${word}</strong>`;
//     } else {
//       for (let i = 0; i < word.length; i++) {
//         const prefix = word.slice(0, i + 1);
//         const suffix = word.slice(i + 1);

//         if (keyWords.has(prefix) && keyWords.has(suffix)) {
//           outPut = `<strong>${prefix}${suffix}</strong>`;
//           break;
//         } else if (keyWords.has(prefix) && !keyWords.has(suffix)) {
//           outPut = `<strong>${prefix}</strong>${suffix}`;
//         } else if (keyWords.has(suffix) && !keyWords.has(prefix)) {
//           outPut = `${prefix}<strong>${suffix}</strong>`;
//         }
//       }
//     }

//     return outPut !== "" ? outPut : word;
//   });

//   return results.join(" ");
// };
// console.log(highlight(str, keyword));

// // Throttle an array of task

// const btn = document.getElementById("btn");

// const throttle = (tasks, count = tasks.length, callback, delay = 1000) => {
//   let lastFunc; // last timer reference
//   let lastRun; // last run timeStamp

//   let queue = [];

//   console.log(lastRun, queue);

//   return function () {
//     if (!lastRun) {
//       queue = [...queue, ...tasks];

//       const execute = queue.splice(0, count);

//       callback(execute);

//       // updating the last run
//       lastRun = Date.now();
//     } else {
//       clearTimeout(lastFunc);

//       lastFunc = setTimeout(() => {
//         if (Date.now() - lastRun >= delay) {
//           queue = [...queue, ...tasks];

//           const execute = queue.splice(0, count);

//           callback(execute);

//           lastRun = Date.now();
//         }
//       }, delay - (Date.now() - lastRun));
//     }
//   };
// };

// btn.addEventListener(
//   "click",
//   throttle(
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     2,
//     (task) => {
//       console.log(task);
//     },
//     2000,
//   ),
// );

// // This is because the addEventListener method immediately calls the assigned function once when the listener is attached.
// // on first click it binds the execution of the throttle func to the listener and
// //on subsequent calls we are calling the execution of the same throttle func means on subsequent calls we are calling only the inner function

// /*************************Circuit breaker in JavaScript******************* */

// const circuitBreaker = (fn, failureThrashold, waitTime) => {
//   let isClosed = false;
//   let failureCount = 0;
//   let TimeOfLastFailure = 0;

//   return function () {
//     if (isClosed) {
//       const timePassed = Date.now() - TimeOfLastFailure;

//       if (timePassed > waitTime) {
//         isClosed = false;
//       } else {
//         console.error("service unavailable");
//         return;
//       }
//     }

//     // call the function till failureCount reaches thrashold limit

//     try {
//       const result = fn();
//       failureCount = 0;
//       return result;
//     } catch (error) {
//       failureCount++;
//       TimeOfLastFailure = Date.now();

//       if (failureCount >= failureThrashold) {
//         isClosed = true;
//       }

//       console.log("Error");
//     }
//   };
// };

// const testFunc = () => {
//   let count = 0;

//   return function () {
//     count++;
//     if (count < 4) {
//       throw "failed";
//     } else {
//       return "success";
//     }
//   };
// };

// let t = testFunc();

// let c = circuitBreaker(t, 3, 200);

// c(); // error
// c(); // error
// c(); // error

// // service is closed for 200ms

// c(); // service unavailable
// c(); // service unavailable
// c(); // "service unavailable"
// c(); // "service unavailable"
// c(); // "service unavailable"

// // service becomes available after 200ms
// setTimeout(() => {
//   console.log(c());
// }, 300);

// /*****************************HTML encoding of a string********************** */

// const parse = (string, array) => {
//   const fragment = array.reduce(
//     (acc, [start, end, tag]) => {
//       acc[start] = `<${tag}>` + acc[start];
//       acc[end] += `</${tag}>`;
//       return acc;
//     },
//     [...string],
//   );

//   console.log(fragment);

//   return new DOMParser().parseFromString(fragment.join(""), "text/html").body
//     .innerHTML;
// };

// const encoded = parse("Hello, World", [
//   [0, 2, "i"],
//   [7, 10, "u"],
//   [4, 9, "b"],
//   [2, 7, "i"],
//   [7, 9, "u"],
// ]);

// console.log(encoded);

// let obj = {
//   i: 0,
//   k: 1,
// };

// obj = new Proxy(obj, {
//   get: (target, property) => {
//     if (property === "i") {
//       target[property] = target[property] + 1;
//       return target[property];
//     }
//   },
// });

// // obj = new Proxy(obj, {
// //   get: (() => {
// //     let cnt = 0;
// //     return (target, property) => {
// //       if (property === "i") {
// //         return function () {
// //           cnt++;
// //           // target[property] = target[property] + 1;
// //           return target[property] + cnt;
// //         };
// //       }

// //       return target[property]; /// for property other than i
// //     };
// //   })(),
// // });

// console.log(obj.i);
// console.log(obj.i);
// console.log(obj.i);

// // console.log(obj.i());
// // console.log(obj.i());
// // console.log(obj.i());

// /*************************SDK********************************** */

// class SDK {
//   constructor() {
//     this.queue = [];
//     this.cnt = 1;
//   }

//   logEvent(event) {
//     this.queue.push(event);
//   }

//   wait = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (this.cnt % 5 === 0) {
//           reject();
//         } else {
//           resolve();
//         }
//       }, 1000);
//     });
//   };

//   sendEvent = async function () {
//     if (this.queue.length === 0) {
//       return;
//     }

//     const current = this.queue.shift();

//     try {
//       await this.wait();

//       console.log(`event triggered successfully ==> ${current}`);

//       this.cnt++;
//     } catch (e) {
//       console.log("-------------------------------------------");
//       console.log(`event is rejected ==> ${current}`);
//       console.log("-------------------------------------------");
//       console.log(`recalling event`);
//       console.log("-------------------------------------------");

//       this.queue.unshift(current);

//       this.cnt = 1;
//     } finally {
//       this.sendEvent();
//     }
//   };

//   send = async function () {
//     this.sendEvent();
//   };
// }

// const sdk = new SDK();

// sdk.logEvent("1");
// sdk.logEvent("2");
// sdk.logEvent("3");
// sdk.logEvent("4");
// sdk.logEvent("5");
// sdk.logEvent("6");
// sdk.logEvent("7");
// sdk.logEvent("8");
// sdk.logEvent("9");

// sdk.send();

// /******************************************** Abort Controller ******************************** */

// const fetchWithTimeOut = (URL, delay) => {
//   const controller = new AbortController();
//   const signal = controller.signal;

//   fetch(URL, { signal })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) =>
//       error.name === "AbortError"
//         ? console.warn("Fetch Request Aborted beacause of TimeOut")
//         : console.warn(error),
//     );

//   setTimeout(() => {
//     console.log("Aborted");
//     controller.abort();
//   }, delay);
// };
// ``;
// fetchWithTimeOut("https://fakestoreapi.com/products", 1000);

// /********************************Cached api call for some time********************************************** */

// const cachedCallApi = (timeOut) => {
//   const cachedData = {};

//   return async function (URL) {
//     const key = generateKey(URL);

//     if (!cachedData[key] || Date.now() > cachedData[key].expireTime) {
//       const data = await callnewApi(URL);
//       cachedData[key] = { data, expireTime: Date.now() + timeOut };
//     } else {
//       console.log("returning cache");
//       return cachedData[key].data.slice(0, 2);
//     }

//     return cachedData[key].data.slice(0, 2);
//   };
// };

// const callnewApi = async (URL) => {
//   let result = await fetch(URL);
//   result = await result.json();
//   // console.log(result);
//   return result;
// };

// const generateKey = (URL) => {
//   return URL;
// };

// const call = cachedCallApi(100000);

// call("https://fakestoreapi.com/products").then((res) => console.log(res));

// call("https://fakestoreapi.com/products").then((res) => console.log(res));

// setTimeout(() => {
//   console.log("*********calling third time************");
//   call("https://fakestoreapi.com/products").then((res) => console.log(res));
// }, 2000);

// /*************************** Piping of function -- 1 ******************************************** */

// function piping(obj) {
//   return function (...args) {
//     for (let key in obj) {
//       const val = obj[key];

//       if (typeof val === "function") {
//         obj[key] = obj[key](...args);
//       } else {
//         object[key] = piping(val)(...args);
//       }
//     }

//     return obj;
//   };
// }

// const object = {
//   a: {
//     b: (a, b, c) => a + b + c,
//     c: (a, b, c) => a + b - c,
//   },
//   d: (a, b, c) => a - b - c,
// };

// const value = piping(object)(1, 1, 1);

// console.log(value);

// /*************************** Piping of function -- 2 ******************************************** */

// const piping2 = (...fns) => {
//   return function (val) {
//     for (let f of fns) {
//       val = f(val);
//     }

//     return val;
//   };
// };

// const data = {
//   salary: 10000,
// };

// const fun1 = (person) => person.salary;
// const fun2 = (salary) => salary + 1000;
// const fun3 = (total) => total - total * 0.3;

// const result = piping2(fun1, fun2, fun3)(data);

// console.log(result);

// /******************************* polyfill for loadash._set() method *********************************************** */

// const set = (obj, path, val) => {
//   let pathArr = path;

//   if (typeof path === "string") {
//     pathArr = path.replace("[", ".").replace("]", "").split(".");
//   }

//   helper(obj, pathArr, val);
// };

// const helper = (obj, arr, val) => {
//   console.log(arr);
//   console.log(obj);
//   let [current, ...] = arr;

//   if (rest.length > 0) {
//     if (!obj[current]) {
//       const isNumber = `+${rest[0]}` === rest[0];
//       obj[current] = isNumber ? [] : {};
//     }

//     if (typeof obj[current] !== "object") {
//       const isNumber = `+${rest[0]}` === rest[0];
//       obj[current] = helper(isNumber ? [] : {}, rest, val);
//     } else {
//       obj[current] = helper(obj[current], rest, val);
//     }
//   } else {
//     obj[current] = val;
//   }
//   return obj;
// };

// const object1 = { a: [{ b: { c: 3 } }] };
// set(object1, "a.b.c.d[0]", 5);
// console.log(object1.a.b.c.d[0]);

// /******************************* polyfill for loadash._get() method *********************************************** */

// const get = (object, path) => {
//   let pathArr = path;
//   if (typeof path === "string") {
//     pathArr = path.replace("[", ".").replace("]", "").split(".");
//   }
//   return helper2(object, pathArr);
// };

// const helper2 = (object, path) => {
//   const [current, ...rest] = path;

//   if (rest.length > 0) {
//     if (!object[current]) {
//       return "hello";
//     }
//     return helper2(object[current], rest);
//   } else {
//     return object[current];
//   }
// };

// const obj1 = {
//   a: {
//     b: {
//       c: [1, 2, 3],
//     },
//   },
// };

// console.log(get(obj1, "a.b.c"));
// console.log(get(obj1, "a.b.c.0"));
// console.log(get(obj1, "a.b.c[1]"));
// console.log(get(obj1, ["a", "b", "c", "2"]));
// console.log(get(obj1, "a.b.c[3]"));
// console.log(get(obj1, "a.c"));

// /******************************************Parallel API Calls ***************************************/

// const fetchData = async (url, idx) => {
//   let response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`error while fetching data at ${idx} --> ${url}`);
//   }

//   return await response.json();
// };

// const fetchTodos = async () => {
//   const urls = [
//     "https://jsonplaceholder.typicode.com/todos/1",
//     "https://jsonplaceholder.typicode.com/todos/2",
//     "https://jsonplaceholder.typicode.com/todos/3km",
//   ];

//   try {
//     const responses = await Promise.all(
//       urls.map((url, idx) => fetchData(url, idx)),
//     );
//     return responses;
//   } catch (error) {
//     console.log(`error -> ${error}`);
//     callFunction();
//   }
// };

// const callFunction = () => {
//   fetchTodos();
// };

// // ********************************************Custom Interceptor******************************************************

// const originFetch = window.fetch;
// window.fetch = async (...args) => {
//   args = requestInterceptor(args);

//   let response = await originFetch(args);

//   response = responseInterceptor(response);

//   return response;
// };

// window.requestInterceptor = (args) => {
//   args[0] = args[0] + "2";
//   return args;
// };

// window.responseInterceptor = async (response) => {
//   return await response.json();
// };

// fetch("https://jsonplaceholder.typicode.com/todos/").then((json) =>
//   console.log(json),
// );

// //**************************************Priority api call********************************************* */

fetch("https://fakestoreapi.com/users", { priority: "low" })
  .then((res) => res.json())
  .then((data) => console.log(data));
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));
