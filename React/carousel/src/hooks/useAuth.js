import React, { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthorize, setisAuthorize] = useState(false);

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"));

    console.log("useAuth");
    // if (user) {
    setisAuthorize(true);
    // }
  }, []);

  return { isAuthorize };
};

export default useAuth;
