import React, { useState } from "react";
import { data } from "../../Data";
const Index3 = () => {
  const [page, setPage] = useState(1);
  const [dataPerPage] = useState(5);
  const Tpage = Math.ceil(data.length / dataPerPage);
  const LastIndex = page * dataPerPage;
  const FirstIndex = LastIndex - dataPerPage;
  const numbers = data.slice(FirstIndex, LastIndex);

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <table>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <tbody>
          {numbers?.map(({ id, name, email }) => (
            <tr key="">
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{ display: "flex", margin: " 3rem 0 1rem 5rem", gap: "2rem" }}
      >
        {page > 1 && <span onClick={prevPage}>prev</span>}
        {[...Array(Tpage + 1).keys()]?.map((num, i) => {
          return (
            i !== 0 && (
              <div
                onClick={() => setPage(num)}
                style={{
                  border: "1px solid red",
                  width: "20px",
                  height: "20px",
                  textAlign: "center",
                }}
              >
                {num}
              </div>
            )
          );
        })}
        {page < Tpage && <span onClick={nextPage}>next</span>}
      </div>
    </div>
  );
};

export default Index3;
