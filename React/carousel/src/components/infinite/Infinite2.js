import React, { useEffect, useState } from "react";

const Infinite2 = () => {
  const [page, setPage] = useState(1);
  const [card, setCard] = useState([]);

  const getData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`,
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      hello
      {card?.map((ele) => {
        return <div>{ele.title}</div>;
      })}
    </div>
  );
};

export default Infinite2;
