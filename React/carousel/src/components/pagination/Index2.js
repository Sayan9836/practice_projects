import React, { useState } from "react";
import { data } from "../../Data";
import "./style.css";
const Index2 = () => {
  const [currPage, setCurrPage] = useState(1);

  console.log(data);
  const Tlength = data.length;
  const DataPerPage = 5;
  const indexOfLastData = currPage * DataPerPage;
  const indexOfFirstData = indexOfLastData - DataPerPage;
  const currDatas = data.slice(indexOfFirstData, indexOfLastData);
  const nPage = Math.ceil(Tlength / DataPerPage);
  const numbers = [...Array(nPage + 1).keys()];

  const handleClick = (event, currPage) => {
    event.preventDefault();
    setCurrPage(currPage);
  };

  const prevPage = (e) => {
    e.preventDefault();
    setCurrPage((curr) => curr - 1);
  };

  const nextPage = (e) => {
    e.preventDefault();
    setCurrPage((curr) => curr + 1);
  };

  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {currDatas?.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {currPage > 1 && (
            <li onClick={prevPage}>
              <a href="">Prev</a>
            </li>
          )}
          {numbers?.map(
            (no, i) =>
              i !== 0 && (
                <li
                  className={`${currPage === i ? "active" : ""}`}
                  onClick={(event) => handleClick(event, i)}
                >
                  <a href="">{no}</a>
                </li>
              ),
          )}
          {currPage < nPage && (
            <li onClick={nextPage}>
              <a href="">next</a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Index2;
