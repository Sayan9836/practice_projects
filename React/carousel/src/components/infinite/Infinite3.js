import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Infinite3 = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults] = useState(13657);
  const [pageSize] = useState(9);

  useEffect(() => {
    // if (pageSize * page < totalResults) {
    // }
    getData();
  }, [page]);

  const InfiniteScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", InfiniteScroll);
    return () => window.removeEventListener("scroll", InfiniteScroll);
  }, []);

  const getData = async () => {
    console.log("called");
    const API_KEY = `84200983da994de6a9f134424ce72d81`;
    const URL = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-19&pageSize=4&page=${page}&sortBy=publishedAt&apiKey=${API_KEY}`;
    try {
      let response = await fetch(URL);
      response = await response.json();
      console.log(response);
      response = response.articles;
      setData((prev) => [...prev, ...response]);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      {data?.map((res, index) => {
        return <p key={index}>{res.author}</p>;
      })}
    </div>
  );
};

export default Infinite3;
