import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interceptor = axios.interceptors.request.use(
      (config) => {
        console.log(config);
        const token = localStorage.getItem("token") || "gnkjgnmm";
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        console.error("Error in Axios request interceptor:", error);
        return Promise.reject(error);
      },
    );
    // fetchData();

    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, []);

  //   axios.interceptors.request.use(
  //     (config) => {
  //       console.log("hello inteceptor");
  //       const token = localStorage.getItem("token") || "";
  //       if (token) {
  //         config.headers.Authorization = `Bearer ${token}`;
  //       }

  //       return config;
  //     },
  //     (error) => {
  //       console.error("Error in Axios request interceptor:", error);
  //     },
  //   );

  const fetchData = async () => {
    const URL = `https://jsonplaceholder.typicode.com/todos`;
    let response = await axios.get(
      URL,
      //     {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${JSON.stringify(
      //       localStorage.getItem("token"),
      //     )}`,
      //   },
      // }
    );
    setData(response.data);
    console.log(response);
  };

  const fetchMoreData = async () => {
    const URL = `https://jsonplaceholder.typicode.com/todos`;
    let response = await axios.get(
      URL,
      //     {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${JSON.stringify(
      //       localStorage.getItem("token"),
      //     )}`,
      //   },
      // }
    );
    setData(response.data);
    console.log(response);
  };

  return (
    <div>
      {data?.map((each) => {
        return <p>{each.title.slice(0, 30)}</p>;
      })}

      <button onClick={fetchMoreData}>sumit</button>
    </div>
  );
};

export default DataFetching;

// axios.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${token}`;
//   },

//   (error) => {
//     console.log(error);
//     Promise.reject(error);
//   },
// );
