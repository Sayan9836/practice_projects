// Promise.all --> goes to catch block returns [data]
// Promise.allSettled --> does no goes to catch block returns [{status, data} or {status, reason}] need to use then
// Promise.race -->
// Promise.any --> returns AgreegateError when all promise are rejected

Promise.all(
  arrays.map((url) =>
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return res.json();
        } else {
          throw new Error("error");
        }
      })
      .catch((err) => {
        throw err;
      }),
  ),
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

let cnt = 1;
const urls = [
  "https://jsonplaceholder.typicode.com/todos/ssasm",
  "https://jsonplaceholder.typicode.com/todos/ask",
  "https://jsonplaceholder.typicode.com/todos/asjas",
  "https://jsonplaceholder.typicode.com/todos/dhas",
  "https://jsonplaceholder.typicode.com/todos/asdas",
];

const fetchData = async (url) => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error while fetching ${url} with status ${res.status}`);
  }

  return await res.json();
};

// const services = () => {
//   try {
//     const response = Promise.allSettled(
//       urls?.map((url, idx) => fetchData(url, idx)),
//     ).then((res) =>
//       res?.map((each) => {
//         if (each.status === "rejected") {
//           console.log(each?.reason.message || "Something went wrong");

//           if (cnt < 5) {
//             console.log(`called => ${cnt}`);
//             cnt++;
//             services();
//           }
//         }
//         console.log(each);
//       }),
//     );
//   } catch (error) {
//     console.log(error?.message || "Something went wrong");
//     if (cnt < 5) {
//       // for Promise.all
//       console.log(`called => ${cnt}`);
//       cnt++;
//       services();
//     }
//   }
// };

// (async () => {
//   console.log(services());
// })();

const services1 = async () => {
  try {
    const response = await Promise.any(
      urls.map((url, idx) => fetchData(url, idx)),
    );

    return response;
  } catch (error) {
    console.log(error || "Something went wrong");
  }
};

(async () => {
  console.log(await services1());
})();

const promisify = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      if (!res.ok) {
        throw new Error("error while fetching data");
      }
      return res.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

promisify
  .then((res) => console.log(res))
  .catch((err) => console.log(err?.message));
