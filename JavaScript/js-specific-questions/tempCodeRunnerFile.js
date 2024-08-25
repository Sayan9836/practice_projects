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
