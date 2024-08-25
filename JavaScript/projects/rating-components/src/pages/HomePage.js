import React, { useState } from "react";
import "./HomePage.css";
const HomePage = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  // const [clicked, setClicked] = useState(false);
  const [ratingNo, setRatingNo] = useState(true);
  const HandleClick = () => {};
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="page">
      <div className="box">
        {!isSubmit ? (
          <>
            <div>
              <img src="" alt="" />
            </div>
            <h2>How did we do?</h2>
            <h4>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h4>
            <div className="rating_container">
              <div
                style={{ backgroundColor: "red" }}
                onClick={() => setRatingNo(arr[0])}
              >
                {arr[0]}
              </div>
              <div
                className={ratingNo === arr[1] ? "selected" : ""}
                onClick={() => setRatingNo(arr[1])}
              >
                {arr[1]}
              </div>
              <div
                className={ratingNo === arr[2] ? "selected" : ""}
                onClick={() => setRatingNo(arr[2])}
              >
                {arr[2]}
              </div>
              <div
                className={ratingNo === arr[3] ? "selected" : ""}
                onClick={() => setRatingNo(arr[3])}
              >
                {arr[3]}
              </div>
              <div
                className={ratingNo === arr[4] ? "selected" : ""}
                onClick={() => setRatingNo(arr[4])}
              >
                {arr[4]}
              </div>
            </div>

            <button onClick={() => setIsSubmit(true)}>Submit</button>
          </>
        ) : (
          <>
            <div>
              <img src="" alt="" />
            </div>
            <h2>Your rating no is {ratingNo}</h2>
            <h2>How did?</h2>
            <h4>aaaaaaaaaaaaaaaaaaaaaaaa</h4>
            <button onClick={() => setIsSubmit(false)}>resubmit?</button>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
