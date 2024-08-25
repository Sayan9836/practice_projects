import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Infinite4 = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResult] = useState(1000);

  const getData = async () => {
    const API_KEY = `84200983da994de6a9f134424ce72d81`;
    const URL = `https://newsapi.org/v2/everything?q=tesla&from=2024-01-24&pageSize=19&page=${
      page + 1
    }&sortBy=publishedAt&apiKey=${API_KEY}`;
    let response = await fetch(URL);
    response = await response.json();
    response = response.articles;
    setData(data.concat(response));
  };

  useEffect(() => {
    getData();
  }, []);

  const fetchMoreData = async () => {
    const API_KEY = `84200983da994de6a9f134424ce72d81`;
    const URL = `https://newsapi.org/v2/everything?q=tesla&from=2024-01-24&pageSize=9&page=${page}&sortBy=publishedAt&apiKey=${API_KEY}`;
    let response = await fetch(URL);
    response = await response.json();
    response = response.articles;
    setData(data.concat(response));
    setPage((prev) => prev + 1);
  };

  return (
    <InfiniteScroll
      dataLength={totalResult}
      next={fetchMoreData}
      hasMore={data.length < totalResult}
    >
      {data?.map((ele) => {
        return <p>{ele.author}</p>;
      })}
    </InfiniteScroll>
  );
};

export default Infinite4;
