import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";

const Fetching = () => {
  const [datas, setDatas] = useState();

  // create instance of axios to remembers common things

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  // axios interceptors : ---

  // (1) request interceptor ,, (2) response interceptor
  client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.common = { Authorization: `Bearer ${token}` };
      }

      return config;
    },
    (error) => {
      Promise.reject(error.response || error.message);
    },
  );

  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    // getPost();
    updatePost();
    // deletePost();
  }, []);

  const getPost = async () => {
    // const response = await axios.get(`${baseURL}`);
    // setDatas(response.data);

    /**********OR***********/

    const response = await client.get();
    setDatas(response.data);
  };

  const updatePost = async () => {
    //    const response= await axios.put(`${baseURL}/1`,{
    //         title: "Hello World!",
    //         body: "This is an updated post"
    //     })
    //     getPost();

    /**********OR***********/

    const response = await client.put("/2", {
      title: "Hello World!",
      body: "This is a Updated Post",
    });

    console.log(response.data);
  };

  const deletePost = async () => {
    try {
      await axios.delete(`${baseURL}/1`);
      getPost();
    } catch (error) {}

    try {
      await client.delete("/2");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {datas?.map((ele) => {
        return (
          <div>
            <span>{ele.id}</span>
            <span>{ele.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Fetching;
